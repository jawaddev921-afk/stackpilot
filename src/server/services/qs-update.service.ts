import { unstable_cache } from "next/cache";
import stackPilotService from "./qs.service";
import { Tags } from "../utils/cache-tag-generator.utils";
import { qsVersionInfoAdapter } from "../adapter/qs-versioninfo.adapter";
import paramService, { ParamService } from "./param.service";

class StackPilotUpdateService {

    async getNewVersionInfo() {
        try {
            const stackpilotInstanceIdParam = await paramService.getOrUndefined(ParamService.QS_INSTANCE_ID);
            const currentVersion = stackPilotService.getVersionOfCurrentStackPilotInstance();
            if (!currentVersion) {
                return undefined;
            }

            if (currentVersion.includes('canary')) {
                return undefined;
            }

            const latestVersionInfo = await unstable_cache(async () => qsVersionInfoAdapter.getLatestStackPilotVersion(stackpilotInstanceIdParam?.value),
                [Tags.stackPilotVersionInfo()], {
                tags: [Tags.stackPilotVersionInfo()],
                revalidate: 60 * 15, // 15 minutes
            })();
            if (currentVersion === latestVersionInfo.version) {
                return undefined;
            }
            return latestVersionInfo;
        } catch (error) {
            console.error("Error fetching latest StackPilot version:", error);
        }
    }
}

const stackPilotUpdateService = new StackPilotUpdateService();
export default stackPilotUpdateService;