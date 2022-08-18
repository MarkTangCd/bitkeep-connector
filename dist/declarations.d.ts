interface Ethereum {
    send: unknown;
    enable: () => Promise<string[]>;
    on?: (method: string, listener: (...args: any[]) => void) => void;
    removeListener?: (method: string, listener: (...args: any[]) => void) => void;
}
interface BitKeep {
    ethereum: Ethereum;
}
declare interface Window {
    bitkeep?: BitKeep;
    isBitKeep?: boolean;
}
declare const __DEV__: boolean;
