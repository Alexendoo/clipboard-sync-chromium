/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const Signed = $root.Signed = (() => {

    /**
     * Properties of a Signed.
     * @exports ISigned
     * @interface ISigned
     * @property {Uint8Array} [body] Signed body
     * @property {Uint8Array} [signature] Signed signature
     * @property {Uint8Array} [publicKey] Signed publicKey
     */

    /**
     * Constructs a new Signed.
     * @exports Signed
     * @classdesc Represents a Signed.
     * @constructor
     * @param {ISigned=} [properties] Properties to set
     */
    function Signed(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Signed body.
     * @member {Uint8Array}body
     * @memberof Signed
     * @instance
     */
    Signed.prototype.body = $util.newBuffer([]);

    /**
     * Signed signature.
     * @member {Uint8Array}signature
     * @memberof Signed
     * @instance
     */
    Signed.prototype.signature = $util.newBuffer([]);

    /**
     * Signed publicKey.
     * @member {Uint8Array}publicKey
     * @memberof Signed
     * @instance
     */
    Signed.prototype.publicKey = $util.newBuffer([]);

    /**
     * Creates a new Signed instance using the specified properties.
     * @function create
     * @memberof Signed
     * @static
     * @param {ISigned=} [properties] Properties to set
     * @returns {Signed} Signed instance
     */
    Signed.create = function create(properties) {
        return new Signed(properties);
    };

    /**
     * Encodes the specified Signed message. Does not implicitly {@link Signed.verify|verify} messages.
     * @function encode
     * @memberof Signed
     * @static
     * @param {ISigned} message Signed message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Signed.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.body != null && message.hasOwnProperty("body"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.body);
        if (message.signature != null && message.hasOwnProperty("signature"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.signature);
        if (message.publicKey != null && message.hasOwnProperty("publicKey"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.publicKey);
        return writer;
    };

    /**
     * Encodes the specified Signed message, length delimited. Does not implicitly {@link Signed.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Signed
     * @static
     * @param {ISigned} message Signed message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Signed.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Signed message from the specified reader or buffer.
     * @function decode
     * @memberof Signed
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Signed} Signed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Signed.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Signed();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.body = reader.bytes();
                break;
            case 2:
                message.signature = reader.bytes();
                break;
            case 3:
                message.publicKey = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Signed message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Signed
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Signed} Signed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Signed.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Signed message.
     * @function verify
     * @memberof Signed
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Signed.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.body != null && message.hasOwnProperty("body"))
            if (!(message.body && typeof message.body.length === "number" || $util.isString(message.body)))
                return "body: buffer expected";
        if (message.signature != null && message.hasOwnProperty("signature"))
            if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                return "signature: buffer expected";
        if (message.publicKey != null && message.hasOwnProperty("publicKey"))
            if (!(message.publicKey && typeof message.publicKey.length === "number" || $util.isString(message.publicKey)))
                return "publicKey: buffer expected";
        return null;
    };

    /**
     * Creates a Signed message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Signed
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Signed} Signed
     */
    Signed.fromObject = function fromObject(object) {
        if (object instanceof $root.Signed)
            return object;
        let message = new $root.Signed();
        if (object.body != null)
            if (typeof object.body === "string")
                $util.base64.decode(object.body, message.body = $util.newBuffer($util.base64.length(object.body)), 0);
            else if (object.body.length)
                message.body = object.body;
        if (object.signature != null)
            if (typeof object.signature === "string")
                $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
            else if (object.signature.length)
                message.signature = object.signature;
        if (object.publicKey != null)
            if (typeof object.publicKey === "string")
                $util.base64.decode(object.publicKey, message.publicKey = $util.newBuffer($util.base64.length(object.publicKey)), 0);
            else if (object.publicKey.length)
                message.publicKey = object.publicKey;
        return message;
    };

    /**
     * Creates a plain object from a Signed message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Signed
     * @static
     * @param {Signed} message Signed
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Signed.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.body = options.bytes === String ? "" : [];
            object.signature = options.bytes === String ? "" : [];
            object.publicKey = options.bytes === String ? "" : [];
        }
        if (message.body != null && message.hasOwnProperty("body"))
            object.body = options.bytes === String ? $util.base64.encode(message.body, 0, message.body.length) : options.bytes === Array ? Array.prototype.slice.call(message.body) : message.body;
        if (message.signature != null && message.hasOwnProperty("signature"))
            object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
        if (message.publicKey != null && message.hasOwnProperty("publicKey"))
            object.publicKey = options.bytes === String ? $util.base64.encode(message.publicKey, 0, message.publicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.publicKey) : message.publicKey;
        return object;
    };

    /**
     * Converts this Signed to JSON.
     * @function toJSON
     * @memberof Signed
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Signed.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Signed;
})();

export const Boxed = $root.Boxed = (() => {

    /**
     * Properties of a Boxed.
     * @exports IBoxed
     * @interface IBoxed
     * @property {Uint8Array} [nonce] Boxed nonce
     * @property {Uint8Array} [body] Boxed body
     */

    /**
     * Constructs a new Boxed.
     * @exports Boxed
     * @classdesc Represents a Boxed.
     * @constructor
     * @param {IBoxed=} [properties] Properties to set
     */
    function Boxed(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Boxed nonce.
     * @member {Uint8Array}nonce
     * @memberof Boxed
     * @instance
     */
    Boxed.prototype.nonce = $util.newBuffer([]);

    /**
     * Boxed body.
     * @member {Uint8Array}body
     * @memberof Boxed
     * @instance
     */
    Boxed.prototype.body = $util.newBuffer([]);

    /**
     * Creates a new Boxed instance using the specified properties.
     * @function create
     * @memberof Boxed
     * @static
     * @param {IBoxed=} [properties] Properties to set
     * @returns {Boxed} Boxed instance
     */
    Boxed.create = function create(properties) {
        return new Boxed(properties);
    };

    /**
     * Encodes the specified Boxed message. Does not implicitly {@link Boxed.verify|verify} messages.
     * @function encode
     * @memberof Boxed
     * @static
     * @param {IBoxed} message Boxed message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Boxed.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.nonce != null && message.hasOwnProperty("nonce"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.nonce);
        if (message.body != null && message.hasOwnProperty("body"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.body);
        return writer;
    };

    /**
     * Encodes the specified Boxed message, length delimited. Does not implicitly {@link Boxed.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Boxed
     * @static
     * @param {IBoxed} message Boxed message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Boxed.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Boxed message from the specified reader or buffer.
     * @function decode
     * @memberof Boxed
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Boxed} Boxed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Boxed.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Boxed();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nonce = reader.bytes();
                break;
            case 2:
                message.body = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Boxed message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Boxed
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Boxed} Boxed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Boxed.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Boxed message.
     * @function verify
     * @memberof Boxed
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Boxed.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.nonce != null && message.hasOwnProperty("nonce"))
            if (!(message.nonce && typeof message.nonce.length === "number" || $util.isString(message.nonce)))
                return "nonce: buffer expected";
        if (message.body != null && message.hasOwnProperty("body"))
            if (!(message.body && typeof message.body.length === "number" || $util.isString(message.body)))
                return "body: buffer expected";
        return null;
    };

    /**
     * Creates a Boxed message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Boxed
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Boxed} Boxed
     */
    Boxed.fromObject = function fromObject(object) {
        if (object instanceof $root.Boxed)
            return object;
        let message = new $root.Boxed();
        if (object.nonce != null)
            if (typeof object.nonce === "string")
                $util.base64.decode(object.nonce, message.nonce = $util.newBuffer($util.base64.length(object.nonce)), 0);
            else if (object.nonce.length)
                message.nonce = object.nonce;
        if (object.body != null)
            if (typeof object.body === "string")
                $util.base64.decode(object.body, message.body = $util.newBuffer($util.base64.length(object.body)), 0);
            else if (object.body.length)
                message.body = object.body;
        return message;
    };

    /**
     * Creates a plain object from a Boxed message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Boxed
     * @static
     * @param {Boxed} message Boxed
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Boxed.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.nonce = options.bytes === String ? "" : [];
            object.body = options.bytes === String ? "" : [];
        }
        if (message.nonce != null && message.hasOwnProperty("nonce"))
            object.nonce = options.bytes === String ? $util.base64.encode(message.nonce, 0, message.nonce.length) : options.bytes === Array ? Array.prototype.slice.call(message.nonce) : message.nonce;
        if (message.body != null && message.hasOwnProperty("body"))
            object.body = options.bytes === String ? $util.base64.encode(message.body, 0, message.body.length) : options.bytes === Array ? Array.prototype.slice.call(message.body) : message.body;
        return object;
    };

    /**
     * Converts this Boxed to JSON.
     * @function toJSON
     * @memberof Boxed
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Boxed.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Boxed;
})();

export const NewDevice = $root.NewDevice = (() => {

    /**
     * Properties of a NewDevice.
     * @exports INewDevice
     * @interface INewDevice
     * @property {string} [name] NewDevice name
     * @property {Uint8Array} [publicKey] NewDevice publicKey
     * @property {string} [FCMToken] NewDevice FCMToken
     */

    /**
     * Constructs a new NewDevice.
     * @exports NewDevice
     * @classdesc Represents a NewDevice.
     * @constructor
     * @param {INewDevice=} [properties] Properties to set
     */
    function NewDevice(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * NewDevice name.
     * @member {string}name
     * @memberof NewDevice
     * @instance
     */
    NewDevice.prototype.name = "";

    /**
     * NewDevice publicKey.
     * @member {Uint8Array}publicKey
     * @memberof NewDevice
     * @instance
     */
    NewDevice.prototype.publicKey = $util.newBuffer([]);

    /**
     * NewDevice FCMToken.
     * @member {string}FCMToken
     * @memberof NewDevice
     * @instance
     */
    NewDevice.prototype.FCMToken = "";

    /**
     * Creates a new NewDevice instance using the specified properties.
     * @function create
     * @memberof NewDevice
     * @static
     * @param {INewDevice=} [properties] Properties to set
     * @returns {NewDevice} NewDevice instance
     */
    NewDevice.create = function create(properties) {
        return new NewDevice(properties);
    };

    /**
     * Encodes the specified NewDevice message. Does not implicitly {@link NewDevice.verify|verify} messages.
     * @function encode
     * @memberof NewDevice
     * @static
     * @param {INewDevice} message NewDevice message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NewDevice.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.publicKey != null && message.hasOwnProperty("publicKey"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.publicKey);
        if (message.FCMToken != null && message.hasOwnProperty("FCMToken"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.FCMToken);
        return writer;
    };

    /**
     * Encodes the specified NewDevice message, length delimited. Does not implicitly {@link NewDevice.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NewDevice
     * @static
     * @param {INewDevice} message NewDevice message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NewDevice.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NewDevice message from the specified reader or buffer.
     * @function decode
     * @memberof NewDevice
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NewDevice} NewDevice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NewDevice.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NewDevice();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            case 2:
                message.publicKey = reader.bytes();
                break;
            case 3:
                message.FCMToken = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a NewDevice message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NewDevice
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NewDevice} NewDevice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NewDevice.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NewDevice message.
     * @function verify
     * @memberof NewDevice
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NewDevice.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.publicKey != null && message.hasOwnProperty("publicKey"))
            if (!(message.publicKey && typeof message.publicKey.length === "number" || $util.isString(message.publicKey)))
                return "publicKey: buffer expected";
        if (message.FCMToken != null && message.hasOwnProperty("FCMToken"))
            if (!$util.isString(message.FCMToken))
                return "FCMToken: string expected";
        return null;
    };

    /**
     * Creates a NewDevice message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NewDevice
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NewDevice} NewDevice
     */
    NewDevice.fromObject = function fromObject(object) {
        if (object instanceof $root.NewDevice)
            return object;
        let message = new $root.NewDevice();
        if (object.name != null)
            message.name = String(object.name);
        if (object.publicKey != null)
            if (typeof object.publicKey === "string")
                $util.base64.decode(object.publicKey, message.publicKey = $util.newBuffer($util.base64.length(object.publicKey)), 0);
            else if (object.publicKey.length)
                message.publicKey = object.publicKey;
        if (object.FCMToken != null)
            message.FCMToken = String(object.FCMToken);
        return message;
    };

    /**
     * Creates a plain object from a NewDevice message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NewDevice
     * @static
     * @param {NewDevice} message NewDevice
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NewDevice.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.name = "";
            object.publicKey = options.bytes === String ? "" : [];
            object.FCMToken = "";
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.publicKey != null && message.hasOwnProperty("publicKey"))
            object.publicKey = options.bytes === String ? $util.base64.encode(message.publicKey, 0, message.publicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.publicKey) : message.publicKey;
        if (message.FCMToken != null && message.hasOwnProperty("FCMToken"))
            object.FCMToken = message.FCMToken;
        return object;
    };

    /**
     * Converts this NewDevice to JSON.
     * @function toJSON
     * @memberof NewDevice
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NewDevice.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return NewDevice;
})();

export const Link = $root.Link = (() => {

    /**
     * Properties of a Link.
     * @exports ILink
     * @interface ILink
     * @property {Uint8Array} [prev] Link prev
     * @property {number} [index] Link index
     * @property {INewDevice} [newDevice] Link newDevice
     */

    /**
     * Constructs a new Link.
     * @exports Link
     * @classdesc Represents a Link.
     * @constructor
     * @param {ILink=} [properties] Properties to set
     */
    function Link(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Link prev.
     * @member {Uint8Array}prev
     * @memberof Link
     * @instance
     */
    Link.prototype.prev = $util.newBuffer([]);

    /**
     * Link index.
     * @member {number}index
     * @memberof Link
     * @instance
     */
    Link.prototype.index = 0;

    /**
     * Link newDevice.
     * @member {(INewDevice|undefined)}newDevice
     * @memberof Link
     * @instance
     */
    Link.prototype.newDevice = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * Link body.
     * @member {string|undefined} body
     * @memberof Link
     * @instance
     */
    Object.defineProperty(Link.prototype, "body", {
        get: $util.oneOfGetter($oneOfFields = ["newDevice"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Link instance using the specified properties.
     * @function create
     * @memberof Link
     * @static
     * @param {ILink=} [properties] Properties to set
     * @returns {Link} Link instance
     */
    Link.create = function create(properties) {
        return new Link(properties);
    };

    /**
     * Encodes the specified Link message. Does not implicitly {@link Link.verify|verify} messages.
     * @function encode
     * @memberof Link
     * @static
     * @param {ILink} message Link message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Link.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.prev != null && message.hasOwnProperty("prev"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.prev);
        if (message.index != null && message.hasOwnProperty("index"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.index);
        if (message.newDevice != null && message.hasOwnProperty("newDevice"))
            $root.NewDevice.encode(message.newDevice, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Link message, length delimited. Does not implicitly {@link Link.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Link
     * @static
     * @param {ILink} message Link message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Link.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Link message from the specified reader or buffer.
     * @function decode
     * @memberof Link
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Link} Link
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Link.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Link();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.prev = reader.bytes();
                break;
            case 2:
                message.index = reader.uint32();
                break;
            case 3:
                message.newDevice = $root.NewDevice.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Link message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Link
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Link} Link
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Link.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Link message.
     * @function verify
     * @memberof Link
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Link.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.prev != null && message.hasOwnProperty("prev"))
            if (!(message.prev && typeof message.prev.length === "number" || $util.isString(message.prev)))
                return "prev: buffer expected";
        if (message.index != null && message.hasOwnProperty("index"))
            if (!$util.isInteger(message.index))
                return "index: integer expected";
        if (message.newDevice != null && message.hasOwnProperty("newDevice")) {
            properties.body = 1;
            {
                let error = $root.NewDevice.verify(message.newDevice);
                if (error)
                    return "newDevice." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Link message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Link
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Link} Link
     */
    Link.fromObject = function fromObject(object) {
        if (object instanceof $root.Link)
            return object;
        let message = new $root.Link();
        if (object.prev != null)
            if (typeof object.prev === "string")
                $util.base64.decode(object.prev, message.prev = $util.newBuffer($util.base64.length(object.prev)), 0);
            else if (object.prev.length)
                message.prev = object.prev;
        if (object.index != null)
            message.index = object.index >>> 0;
        if (object.newDevice != null) {
            if (typeof object.newDevice !== "object")
                throw TypeError(".Link.newDevice: object expected");
            message.newDevice = $root.NewDevice.fromObject(object.newDevice);
        }
        return message;
    };

    /**
     * Creates a plain object from a Link message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Link
     * @static
     * @param {Link} message Link
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Link.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.prev = options.bytes === String ? "" : [];
            object.index = 0;
        }
        if (message.prev != null && message.hasOwnProperty("prev"))
            object.prev = options.bytes === String ? $util.base64.encode(message.prev, 0, message.prev.length) : options.bytes === Array ? Array.prototype.slice.call(message.prev) : message.prev;
        if (message.index != null && message.hasOwnProperty("index"))
            object.index = message.index;
        if (message.newDevice != null && message.hasOwnProperty("newDevice")) {
            object.newDevice = $root.NewDevice.toObject(message.newDevice, options);
            if (options.oneofs)
                object.body = "newDevice";
        }
        return object;
    };

    /**
     * Converts this Link to JSON.
     * @function toJSON
     * @memberof Link
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Link.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Link;
})();

export const ServerInfo = $root.ServerInfo = (() => {

    /**
     * Properties of a ServerInfo.
     * @exports IServerInfo
     * @interface IServerInfo
     * @property {string} [version] ServerInfo version
     * @property {string} [senderId] ServerInfo senderId
     */

    /**
     * Constructs a new ServerInfo.
     * @exports ServerInfo
     * @classdesc Represents a ServerInfo.
     * @constructor
     * @param {IServerInfo=} [properties] Properties to set
     */
    function ServerInfo(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ServerInfo version.
     * @member {string}version
     * @memberof ServerInfo
     * @instance
     */
    ServerInfo.prototype.version = "";

    /**
     * ServerInfo senderId.
     * @member {string}senderId
     * @memberof ServerInfo
     * @instance
     */
    ServerInfo.prototype.senderId = "";

    /**
     * Creates a new ServerInfo instance using the specified properties.
     * @function create
     * @memberof ServerInfo
     * @static
     * @param {IServerInfo=} [properties] Properties to set
     * @returns {ServerInfo} ServerInfo instance
     */
    ServerInfo.create = function create(properties) {
        return new ServerInfo(properties);
    };

    /**
     * Encodes the specified ServerInfo message. Does not implicitly {@link ServerInfo.verify|verify} messages.
     * @function encode
     * @memberof ServerInfo
     * @static
     * @param {IServerInfo} message ServerInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.version != null && message.hasOwnProperty("version"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.version);
        if (message.senderId != null && message.hasOwnProperty("senderId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.senderId);
        return writer;
    };

    /**
     * Encodes the specified ServerInfo message, length delimited. Does not implicitly {@link ServerInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ServerInfo
     * @static
     * @param {IServerInfo} message ServerInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ServerInfo message from the specified reader or buffer.
     * @function decode
     * @memberof ServerInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ServerInfo} ServerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerInfo();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.version = reader.string();
                break;
            case 2:
                message.senderId = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ServerInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ServerInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ServerInfo} ServerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ServerInfo message.
     * @function verify
     * @memberof ServerInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ServerInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.version != null && message.hasOwnProperty("version"))
            if (!$util.isString(message.version))
                return "version: string expected";
        if (message.senderId != null && message.hasOwnProperty("senderId"))
            if (!$util.isString(message.senderId))
                return "senderId: string expected";
        return null;
    };

    /**
     * Creates a ServerInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ServerInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ServerInfo} ServerInfo
     */
    ServerInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerInfo)
            return object;
        let message = new $root.ServerInfo();
        if (object.version != null)
            message.version = String(object.version);
        if (object.senderId != null)
            message.senderId = String(object.senderId);
        return message;
    };

    /**
     * Creates a plain object from a ServerInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ServerInfo
     * @static
     * @param {ServerInfo} message ServerInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ServerInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.version = "";
            object.senderId = "";
        }
        if (message.version != null && message.hasOwnProperty("version"))
            object.version = message.version;
        if (message.senderId != null && message.hasOwnProperty("senderId"))
            object.senderId = message.senderId;
        return object;
    };

    /**
     * Converts this ServerInfo to JSON.
     * @function toJSON
     * @memberof ServerInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ServerInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ServerInfo;
})();

export const ChildHello = $root.ChildHello = (() => {

    /**
     * Properties of a ChildHello.
     * @exports IChildHello
     * @interface IChildHello
     * @property {INewDevice} [device] ChildHello device
     */

    /**
     * Constructs a new ChildHello.
     * @exports ChildHello
     * @classdesc Represents a ChildHello.
     * @constructor
     * @param {IChildHello=} [properties] Properties to set
     */
    function ChildHello(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ChildHello device.
     * @member {(INewDevice|undefined)}device
     * @memberof ChildHello
     * @instance
     */
    ChildHello.prototype.device = null;

    /**
     * Creates a new ChildHello instance using the specified properties.
     * @function create
     * @memberof ChildHello
     * @static
     * @param {IChildHello=} [properties] Properties to set
     * @returns {ChildHello} ChildHello instance
     */
    ChildHello.create = function create(properties) {
        return new ChildHello(properties);
    };

    /**
     * Encodes the specified ChildHello message. Does not implicitly {@link ChildHello.verify|verify} messages.
     * @function encode
     * @memberof ChildHello
     * @static
     * @param {IChildHello} message ChildHello message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChildHello.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.device != null && message.hasOwnProperty("device"))
            $root.NewDevice.encode(message.device, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ChildHello message, length delimited. Does not implicitly {@link ChildHello.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ChildHello
     * @static
     * @param {IChildHello} message ChildHello message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChildHello.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ChildHello message from the specified reader or buffer.
     * @function decode
     * @memberof ChildHello
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChildHello} ChildHello
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChildHello.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChildHello();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.device = $root.NewDevice.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ChildHello message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ChildHello
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChildHello} ChildHello
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChildHello.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ChildHello message.
     * @function verify
     * @memberof ChildHello
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ChildHello.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.device != null && message.hasOwnProperty("device")) {
            let error = $root.NewDevice.verify(message.device);
            if (error)
                return "device." + error;
        }
        return null;
    };

    /**
     * Creates a ChildHello message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ChildHello
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ChildHello} ChildHello
     */
    ChildHello.fromObject = function fromObject(object) {
        if (object instanceof $root.ChildHello)
            return object;
        let message = new $root.ChildHello();
        if (object.device != null) {
            if (typeof object.device !== "object")
                throw TypeError(".ChildHello.device: object expected");
            message.device = $root.NewDevice.fromObject(object.device);
        }
        return message;
    };

    /**
     * Creates a plain object from a ChildHello message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ChildHello
     * @static
     * @param {ChildHello} message ChildHello
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ChildHello.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.device = null;
        if (message.device != null && message.hasOwnProperty("device"))
            object.device = $root.NewDevice.toObject(message.device, options);
        return object;
    };

    /**
     * Converts this ChildHello to JSON.
     * @function toJSON
     * @memberof ChildHello
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ChildHello.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ChildHello;
})();

export const ParentHello = $root.ParentHello = (() => {

    /**
     * Properties of a ParentHello.
     * @exports IParentHello
     * @interface IParentHello
     * @property {ILink} [root] ParentHello root
     */

    /**
     * Constructs a new ParentHello.
     * @exports ParentHello
     * @classdesc Represents a ParentHello.
     * @constructor
     * @param {IParentHello=} [properties] Properties to set
     */
    function ParentHello(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ParentHello root.
     * @member {(ILink|undefined)}root
     * @memberof ParentHello
     * @instance
     */
    ParentHello.prototype.root = null;

    /**
     * Creates a new ParentHello instance using the specified properties.
     * @function create
     * @memberof ParentHello
     * @static
     * @param {IParentHello=} [properties] Properties to set
     * @returns {ParentHello} ParentHello instance
     */
    ParentHello.create = function create(properties) {
        return new ParentHello(properties);
    };

    /**
     * Encodes the specified ParentHello message. Does not implicitly {@link ParentHello.verify|verify} messages.
     * @function encode
     * @memberof ParentHello
     * @static
     * @param {IParentHello} message ParentHello message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ParentHello.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.root != null && message.hasOwnProperty("root"))
            $root.Link.encode(message.root, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ParentHello message, length delimited. Does not implicitly {@link ParentHello.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ParentHello
     * @static
     * @param {IParentHello} message ParentHello message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ParentHello.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ParentHello message from the specified reader or buffer.
     * @function decode
     * @memberof ParentHello
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ParentHello} ParentHello
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ParentHello.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ParentHello();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.root = $root.Link.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ParentHello message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ParentHello
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ParentHello} ParentHello
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ParentHello.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ParentHello message.
     * @function verify
     * @memberof ParentHello
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ParentHello.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.root != null && message.hasOwnProperty("root")) {
            let error = $root.Link.verify(message.root);
            if (error)
                return "root." + error;
        }
        return null;
    };

    /**
     * Creates a ParentHello message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ParentHello
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ParentHello} ParentHello
     */
    ParentHello.fromObject = function fromObject(object) {
        if (object instanceof $root.ParentHello)
            return object;
        let message = new $root.ParentHello();
        if (object.root != null) {
            if (typeof object.root !== "object")
                throw TypeError(".ParentHello.root: object expected");
            message.root = $root.Link.fromObject(object.root);
        }
        return message;
    };

    /**
     * Creates a plain object from a ParentHello message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ParentHello
     * @static
     * @param {ParentHello} message ParentHello
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ParentHello.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.root = null;
        if (message.root != null && message.hasOwnProperty("root"))
            object.root = $root.Link.toObject(message.root, options);
        return object;
    };

    /**
     * Converts this ParentHello to JSON.
     * @function toJSON
     * @memberof ParentHello
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ParentHello.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ParentHello;
})();

export { $root as default };
