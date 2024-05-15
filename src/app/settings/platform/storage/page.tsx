import paramService, { ParamService } from "@/server/services/param.service"
import s3TargetService from "@/server/services/s3-target.service"
import LonghornUiToggle from "./longhorn-ui-toggle"
import StackPilotRegistrySettings from "./qs-registry-settings"
import StackPilotSystemBackupSettings from "./qs-system-backup-settings"
import { ServerSettingsPage } from "../../server-settings-page"

export default async function StorageSettingsPage() {
  const [registryStorageLocation, systemBackupLocation, s3Targets] = await Promise.all([
    paramService.getString(ParamService.REGISTRY_SOTRAGE_LOCATION),
    paramService.getString(ParamService.QS_SYSTEM_BACKUP_LOCATION),
    s3TargetService.getAll(),
  ])

  return <ServerSettingsPage title="Storage & Backups">
    <div className="grid gap-6">
      <StackPilotRegistrySettings registryStorageLocation={registryStorageLocation!} s3Targets={s3Targets} />
      <StackPilotSystemBackupSettings systemBackupLocation={systemBackupLocation!} s3Targets={s3Targets} />
      <LonghornUiToggle />
    </div>
  </ServerSettingsPage>
}
