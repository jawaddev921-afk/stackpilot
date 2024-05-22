import { HostnameDnsProviderUtils } from '@/shared/utils/domain-dns-provider.utils';

describe('DomainDnsProviderUtils', () => {
    describe('isValidDnsProviderHostname', () => {
        it('should return true for valid stackpilot.me domain with subdomain', () => {
            expect(HostnameDnsProviderUtils.isValidDnsProviderHostname('sub.example.stackpilot.me')).toBe(true);
        });

        it('should return true for hex IP-based domain', () => {
            expect(HostnameDnsProviderUtils.isValidDnsProviderHostname('c0a80101.stackpilot.me')).toBe(true);
        });

        it('should return true for simple domain ending with .stackpilot.me', () => {
            expect(HostnameDnsProviderUtils.isValidDnsProviderHostname('example.stackpilot.me')).toBe(true);
        });

        it('should return false for domain not ending with .stackpilot.me', () => {
            expect(HostnameDnsProviderUtils.isValidDnsProviderHostname('example.com')).toBe(false);
        });

        it('should return false for domain with only provider domain', () => {
            expect(HostnameDnsProviderUtils.isValidDnsProviderHostname('stackpilot.me')).toBe(false);
        });

        it('should return false for empty string', () => {
            expect(HostnameDnsProviderUtils.isValidDnsProviderHostname('')).toBe(false);
        });
    });

    describe('containsDnsProviderHostname', () => {
        it('should return true for domain containing .stackpilot.me', () => {
            expect(HostnameDnsProviderUtils.containsDnsProviderHostname('example.stackpilot.me')).toBe(true);
        });

        it('should return true for subdomain containing .stackpilot.me', () => {
            expect(HostnameDnsProviderUtils.containsDnsProviderHostname('sub.example.stackpilot.me')).toBe(true);
        });

        it('should return false for domain not containing .stackpilot.me', () => {
            expect(HostnameDnsProviderUtils.containsDnsProviderHostname('example.com')).toBe(false);
        });

        it('should return false for empty string', () => {
            expect(HostnameDnsProviderUtils.containsDnsProviderHostname('')).toBe(false);
        });
    });

    describe('getHostnameForIpAddress', () => {
        it('should convert IP address to hostname with hex format', () => {
            expect(HostnameDnsProviderUtils.getHexHostnameForIpAddress('192.168.1.1')).toBe('c0a80101.stackpilot.me');
        });

        it('should handle another IP address format', () => {
            expect(HostnameDnsProviderUtils.getHexHostnameForIpAddress('10.0.0.1')).toBe('0a000001.stackpilot.me');
        });

        it('should handle localhost IP', () => {
            expect(HostnameDnsProviderUtils.getHexHostnameForIpAddress('127.0.0.1')).toBe('7f000001.stackpilot.me');
        });
    });

    describe('getHostnameForIpAdress', () => {
        it('should convert IP address to hostname with dash-separated format', () => {
            expect(HostnameDnsProviderUtils.getHostnameForIpAdress('192.168.1.1')).toBe('192-168-1-1.stackpilot.me');
        });

        it('should handle another IP address format', () => {
            expect(HostnameDnsProviderUtils.getHostnameForIpAdress('10.0.0.1')).toBe('10-0-0-1.stackpilot.me');
        });

        it('should handle localhost IP', () => {
            expect(HostnameDnsProviderUtils.getHostnameForIpAdress('127.0.0.1')).toBe('127-0-0-1.stackpilot.me');
        });

        it('should handle max values correctly', () => {
            expect(HostnameDnsProviderUtils.getHostnameForIpAdress('255.255.255.255')).toBe('255-255-255-255.stackpilot.me');
        });

        it('should handle minimum values correctly', () => {
            expect(HostnameDnsProviderUtils.getHostnameForIpAdress('0.0.0.0')).toBe('0-0-0-0.stackpilot.me');
        });
    });

    describe('ipv4ToHex', () => {
        it('should convert IPv4 address to hex', () => {
            expect(HostnameDnsProviderUtils.ipv4ToHex('192.168.1.1')).toBe('c0a80101');
        });

        it('should convert another IPv4 address to hex', () => {
            expect(HostnameDnsProviderUtils.ipv4ToHex('10.0.0.1')).toBe('0a000001');
        });

        it('should handle leading zeros correctly', () => {
            expect(HostnameDnsProviderUtils.ipv4ToHex('1.2.3.4')).toBe('01020304');
        });

        it('should handle max values correctly', () => {
            expect(HostnameDnsProviderUtils.ipv4ToHex('255.255.255.255')).toBe('ffffffff');
        });
    });
});