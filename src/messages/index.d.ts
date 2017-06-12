import * as $protobuf from "protobufjs";

/** Namespace messages. */
export namespace messages {

    /** Properties of a Signed. */
    interface ISigned {

        /** Signed body */
        body?: Uint8Array;

        /** Signed signature */
        signature?: Uint8Array;

        /** Signed publicKey */
        publicKey?: Uint8Array;
    }

    /** Represents a Signed. */
    class Signed {

        /**
         * Constructs a new Signed.
         * @param [properties] Properties to set
         */
        constructor(properties?: messages.ISigned);

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
        public static create(properties?: messages.ISigned): messages.Signed;

        /**
         * Encodes the specified Signed message. Does not implicitly {@link messages.Signed.verify|verify} messages.
         * @param message Signed message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: messages.ISigned, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Signed message, length delimited. Does not implicitly {@link messages.Signed.verify|verify} messages.
         * @param message Signed message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: messages.ISigned, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Signed message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Signed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.Signed;

        /**
         * Decodes a Signed message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Signed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.Signed;

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
        public static fromObject(object: { [k: string]: any }): messages.Signed;

        /**
         * Creates a plain object from a Signed message. Also converts values to other types if specified.
         * @param message Signed
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: messages.Signed, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Signed to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NewDevice. */
    interface INewDevice {

        /** NewDevice name */
        name?: string;

        /** NewDevice publicKey */
        publicKey?: Uint8Array;

        /** NewDevice FCMToken */
        FCMToken?: string;
    }

    /** Represents a NewDevice. */
    class NewDevice {

        /**
         * Constructs a new NewDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: messages.INewDevice);

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
        public static create(properties?: messages.INewDevice): messages.NewDevice;

        /**
         * Encodes the specified NewDevice message. Does not implicitly {@link messages.NewDevice.verify|verify} messages.
         * @param message NewDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: messages.INewDevice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NewDevice message, length delimited. Does not implicitly {@link messages.NewDevice.verify|verify} messages.
         * @param message NewDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: messages.INewDevice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NewDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NewDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.NewDevice;

        /**
         * Decodes a NewDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NewDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.NewDevice;

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
        public static fromObject(object: { [k: string]: any }): messages.NewDevice;

        /**
         * Creates a plain object from a NewDevice message. Also converts values to other types if specified.
         * @param message NewDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: messages.NewDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NewDevice to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Link. */
    interface ILink {

        /** Link prev */
        prev?: Uint8Array;

        /** Link sequenceNumber */
        sequenceNumber?: number;

        /** Link newDevice */
        newDevice?: messages.INewDevice;
    }

    /** Represents a Link. */
    class Link {

        /**
         * Constructs a new Link.
         * @param [properties] Properties to set
         */
        constructor(properties?: messages.ILink);

        /** Link prev. */
        public prev: Uint8Array;

        /** Link sequenceNumber. */
        public sequenceNumber: number;

        /** Link newDevice. */
        public newDevice?: (messages.INewDevice|null);

        /** Link body. */
        public body?: string;

        /**
         * Creates a new Link instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Link instance
         */
        public static create(properties?: messages.ILink): messages.Link;

        /**
         * Encodes the specified Link message. Does not implicitly {@link messages.Link.verify|verify} messages.
         * @param message Link message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: messages.ILink, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Link message, length delimited. Does not implicitly {@link messages.Link.verify|verify} messages.
         * @param message Link message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: messages.ILink, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Link message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Link
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.Link;

        /**
         * Decodes a Link message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Link
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.Link;

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
        public static fromObject(object: { [k: string]: any }): messages.Link;

        /**
         * Creates a plain object from a Link message. Also converts values to other types if specified.
         * @param message Link
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: messages.Link, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Link to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
