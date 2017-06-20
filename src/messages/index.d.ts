import * as $protobuf from "protobufjs";

/** Properties of a ServerInfo. */
export interface IServerInfo {

    /** ServerInfo version */
    version?: string;

    /** ServerInfo senderId */
    senderId?: string;
}

/** Represents a ServerInfo. */
export class ServerInfo {

    /**
     * Constructs a new ServerInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IServerInfo);

    /** ServerInfo version. */
    public version: string;

    /** ServerInfo senderId. */
    public senderId: string;

    /**
     * Creates a new ServerInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ServerInfo instance
     */
    public static create(properties?: IServerInfo): ServerInfo;

    /**
     * Encodes the specified ServerInfo message. Does not implicitly {@link ServerInfo.verify|verify} messages.
     * @param message ServerInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IServerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ServerInfo message, length delimited. Does not implicitly {@link ServerInfo.verify|verify} messages.
     * @param message ServerInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IServerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ServerInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ServerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerInfo;

    /**
     * Decodes a ServerInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ServerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerInfo;

    /**
     * Verifies a ServerInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ServerInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ServerInfo
     */
    public static fromObject(object: { [k: string]: any }): ServerInfo;

    /**
     * Creates a plain object from a ServerInfo message. Also converts values to other types if specified.
     * @param message ServerInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ServerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ServerInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Signed. */
export interface ISigned {

    /** Signed body */
    body?: Uint8Array;

    /** Signed signature */
    signature?: Uint8Array;

    /** Signed publicKey */
    publicKey?: Uint8Array;
}

/** Represents a Signed. */
export class Signed {

    /**
     * Constructs a new Signed.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISigned);

    /** Signed body. */
    public body: Uint8Array;

    /** Signed signature. */
    public signature: Uint8Array;

    /** Signed publicKey. */
    public publicKey: Uint8Array;

    /**
     * Creates a new Signed instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Signed instance
     */
    public static create(properties?: ISigned): Signed;

    /**
     * Encodes the specified Signed message. Does not implicitly {@link Signed.verify|verify} messages.
     * @param message Signed message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISigned, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Signed message, length delimited. Does not implicitly {@link Signed.verify|verify} messages.
     * @param message Signed message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISigned, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Signed message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Signed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Signed;

    /**
     * Decodes a Signed message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Signed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Signed;

    /**
     * Verifies a Signed message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Signed message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Signed
     */
    public static fromObject(object: { [k: string]: any }): Signed;

    /**
     * Creates a plain object from a Signed message. Also converts values to other types if specified.
     * @param message Signed
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Signed, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Signed to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a NewDevice. */
export interface INewDevice {

    /** NewDevice name */
    name?: string;

    /** NewDevice publicKey */
    publicKey?: Uint8Array;

    /** NewDevice FCMToken */
    FCMToken?: string;
}

/** Represents a NewDevice. */
export class NewDevice {

    /**
     * Constructs a new NewDevice.
     * @param [properties] Properties to set
     */
    constructor(properties?: INewDevice);

    /** NewDevice name. */
    public name: string;

    /** NewDevice publicKey. */
    public publicKey: Uint8Array;

    /** NewDevice FCMToken. */
    public FCMToken: string;

    /**
     * Creates a new NewDevice instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NewDevice instance
     */
    public static create(properties?: INewDevice): NewDevice;

    /**
     * Encodes the specified NewDevice message. Does not implicitly {@link NewDevice.verify|verify} messages.
     * @param message NewDevice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INewDevice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NewDevice message, length delimited. Does not implicitly {@link NewDevice.verify|verify} messages.
     * @param message NewDevice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INewDevice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NewDevice message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NewDevice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NewDevice;

    /**
     * Decodes a NewDevice message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NewDevice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NewDevice;

    /**
     * Verifies a NewDevice message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NewDevice message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NewDevice
     */
    public static fromObject(object: { [k: string]: any }): NewDevice;

    /**
     * Creates a plain object from a NewDevice message. Also converts values to other types if specified.
     * @param message NewDevice
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NewDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NewDevice to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Link. */
export interface ILink {

    /** Link prev */
    prev?: Uint8Array;

    /** Link sequenceNumber */
    sequenceNumber?: number;

    /** Link newDevice */
    newDevice?: INewDevice;
}

/** Represents a Link. */
export class Link {

    /**
     * Constructs a new Link.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILink);

    /** Link prev. */
    public prev: Uint8Array;

    /** Link sequenceNumber. */
    public sequenceNumber: number;

    /** Link newDevice. */
    public newDevice?: (INewDevice|null);

    /** Link body. */
    public body?: string;

    /**
     * Creates a new Link instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Link instance
     */
    public static create(properties?: ILink): Link;

    /**
     * Encodes the specified Link message. Does not implicitly {@link Link.verify|verify} messages.
     * @param message Link message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILink, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Link message, length delimited. Does not implicitly {@link Link.verify|verify} messages.
     * @param message Link message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILink, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Link message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Link
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Link;

    /**
     * Decodes a Link message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Link
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Link;

    /**
     * Verifies a Link message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Link message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Link
     */
    public static fromObject(object: { [k: string]: any }): Link;

    /**
     * Creates a plain object from a Link message. Also converts values to other types if specified.
     * @param message Link
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Link, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Link to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Boxed. */
export interface IBoxed {

    /** Boxed body */
    body?: Uint8Array;

    /** Boxed nonce */
    nonce?: Uint8Array;
}

/** Represents a Boxed. */
export class Boxed {

    /**
     * Constructs a new Boxed.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBoxed);

    /** Boxed body. */
    public body: Uint8Array;

    /** Boxed nonce. */
    public nonce: Uint8Array;

    /**
     * Creates a new Boxed instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Boxed instance
     */
    public static create(properties?: IBoxed): Boxed;

    /**
     * Encodes the specified Boxed message. Does not implicitly {@link Boxed.verify|verify} messages.
     * @param message Boxed message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBoxed, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Boxed message, length delimited. Does not implicitly {@link Boxed.verify|verify} messages.
     * @param message Boxed message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBoxed, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Boxed message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Boxed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Boxed;

    /**
     * Decodes a Boxed message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Boxed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Boxed;

    /**
     * Verifies a Boxed message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Boxed message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Boxed
     */
    public static fromObject(object: { [k: string]: any }): Boxed;

    /**
     * Creates a plain object from a Boxed message. Also converts values to other types if specified.
     * @param message Boxed
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Boxed, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Boxed to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
