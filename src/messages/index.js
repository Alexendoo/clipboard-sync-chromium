/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const messages = $root.messages = (() => {

    /**
     * Namespace messages.
     * @exports messages
     * @namespace
     */
    const messages = {};

    messages.Signed = (function() {

        /**
         * Properties of a Signed.
         * @memberof messages
         * @interface ISigned
         * @property {Uint8Array} [body] Signed body
         * @property {Uint8Array} [signature] Signed signature
         * @property {Uint8Array} [publicKey] Signed publicKey
         */

        /**
         * Constructs a new Signed.
         * @memberof messages
         * @classdesc Represents a Signed.
         * @constructor
         * @param {messages.ISigned=} [properties] Properties to set
         */
        function Signed(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Signed body.
         * @type {Uint8Array}
         */
        Signed.prototype.body = $util.newBuffer([]);

        /**
         * Signed signature.
         * @type {Uint8Array}
         */
        Signed.prototype.signature = $util.newBuffer([]);

        /**
         * Signed publicKey.
         * @type {Uint8Array}
         */
        Signed.prototype.publicKey = $util.newBuffer([]);

        /**
         * Creates a new Signed instance using the specified properties.
         * @param {messages.ISigned=} [properties] Properties to set
         * @returns {messages.Signed} Signed instance
         */
        Signed.create = function create(properties) {
            return new Signed(properties);
        };

        /**
         * Encodes the specified Signed message. Does not implicitly {@link messages.Signed.verify|verify} messages.
         * @param {messages.ISigned} message Signed message or plain object to encode
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
         * Encodes the specified Signed message, length delimited. Does not implicitly {@link messages.Signed.verify|verify} messages.
         * @param {messages.ISigned} message Signed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Signed.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Signed message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {messages.Signed} Signed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Signed.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.Signed();
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {messages.Signed} Signed
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
         * @param {Object.<string,*>} object Plain object
         * @returns {messages.Signed} Signed
         */
        Signed.fromObject = function fromObject(object) {
            if (object instanceof $root.messages.Signed)
                return object;
            let message = new $root.messages.Signed();
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
         * @param {messages.Signed} message Signed
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
         * @returns {Object.<string,*>} JSON object
         */
        Signed.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Signed;
    })();

    messages.NewDevice = (function() {

        /**
         * Properties of a NewDevice.
         * @memberof messages
         * @interface INewDevice
         * @property {string} [name] NewDevice name
         * @property {Uint8Array} [publicKey] NewDevice publicKey
         * @property {string} [FCMToken] NewDevice FCMToken
         */

        /**
         * Constructs a new NewDevice.
         * @memberof messages
         * @classdesc Represents a NewDevice.
         * @constructor
         * @param {messages.INewDevice=} [properties] Properties to set
         */
        function NewDevice(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NewDevice name.
         * @type {string}
         */
        NewDevice.prototype.name = "";

        /**
         * NewDevice publicKey.
         * @type {Uint8Array}
         */
        NewDevice.prototype.publicKey = $util.newBuffer([]);

        /**
         * NewDevice FCMToken.
         * @type {string}
         */
        NewDevice.prototype.FCMToken = "";

        /**
         * Creates a new NewDevice instance using the specified properties.
         * @param {messages.INewDevice=} [properties] Properties to set
         * @returns {messages.NewDevice} NewDevice instance
         */
        NewDevice.create = function create(properties) {
            return new NewDevice(properties);
        };

        /**
         * Encodes the specified NewDevice message. Does not implicitly {@link messages.NewDevice.verify|verify} messages.
         * @param {messages.INewDevice} message NewDevice message or plain object to encode
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
         * Encodes the specified NewDevice message, length delimited. Does not implicitly {@link messages.NewDevice.verify|verify} messages.
         * @param {messages.INewDevice} message NewDevice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NewDevice.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NewDevice message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {messages.NewDevice} NewDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NewDevice.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.NewDevice();
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {messages.NewDevice} NewDevice
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
         * @param {Object.<string,*>} object Plain object
         * @returns {messages.NewDevice} NewDevice
         */
        NewDevice.fromObject = function fromObject(object) {
            if (object instanceof $root.messages.NewDevice)
                return object;
            let message = new $root.messages.NewDevice();
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
         * @param {messages.NewDevice} message NewDevice
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
         * @returns {Object.<string,*>} JSON object
         */
        NewDevice.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NewDevice;
    })();

    messages.Link = (function() {

        /**
         * Properties of a Link.
         * @memberof messages
         * @interface ILink
         * @property {Uint8Array} [prev] Link prev
         * @property {number} [sequenceNumber] Link sequenceNumber
         * @property {messages.INewDevice} [newDevice] Link newDevice
         */

        /**
         * Constructs a new Link.
         * @memberof messages
         * @classdesc Represents a Link.
         * @constructor
         * @param {messages.ILink=} [properties] Properties to set
         */
        function Link(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Link prev.
         * @type {Uint8Array}
         */
        Link.prototype.prev = $util.newBuffer([]);

        /**
         * Link sequenceNumber.
         * @type {number}
         */
        Link.prototype.sequenceNumber = 0;

        /**
         * Link newDevice.
         * @type {(messages.INewDevice|null)}
         */
        Link.prototype.newDevice = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Link body.
         * @name messages.Link#body
         * @type {string|undefined}
         */
        Object.defineProperty(Link.prototype, "body", {
            get: $util.oneOfGetter($oneOfFields = ["newDevice"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Link instance using the specified properties.
         * @param {messages.ILink=} [properties] Properties to set
         * @returns {messages.Link} Link instance
         */
        Link.create = function create(properties) {
            return new Link(properties);
        };

        /**
         * Encodes the specified Link message. Does not implicitly {@link messages.Link.verify|verify} messages.
         * @param {messages.ILink} message Link message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Link.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.prev != null && message.hasOwnProperty("prev"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.prev);
            if (message.sequenceNumber != null && message.hasOwnProperty("sequenceNumber"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.sequenceNumber);
            if (message.newDevice != null && message.hasOwnProperty("newDevice"))
                $root.messages.NewDevice.encode(message.newDevice, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Link message, length delimited. Does not implicitly {@link messages.Link.verify|verify} messages.
         * @param {messages.ILink} message Link message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Link.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Link message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {messages.Link} Link
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Link.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.Link();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.prev = reader.bytes();
                    break;
                case 2:
                    message.sequenceNumber = reader.uint32();
                    break;
                case 3:
                    message.newDevice = $root.messages.NewDevice.decode(reader, reader.uint32());
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {messages.Link} Link
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
            if (message.sequenceNumber != null && message.hasOwnProperty("sequenceNumber"))
                if (!$util.isInteger(message.sequenceNumber))
                    return "sequenceNumber: integer expected";
            if (message.newDevice != null && message.hasOwnProperty("newDevice")) {
                properties.body = 1;
                let error = $root.messages.NewDevice.verify(message.newDevice);
                if (error)
                    return "newDevice." + error;
            }
            return null;
        };

        /**
         * Creates a Link message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {messages.Link} Link
         */
        Link.fromObject = function fromObject(object) {
            if (object instanceof $root.messages.Link)
                return object;
            let message = new $root.messages.Link();
            if (object.prev != null)
                if (typeof object.prev === "string")
                    $util.base64.decode(object.prev, message.prev = $util.newBuffer($util.base64.length(object.prev)), 0);
                else if (object.prev.length)
                    message.prev = object.prev;
            if (object.sequenceNumber != null)
                message.sequenceNumber = object.sequenceNumber >>> 0;
            if (object.newDevice != null) {
                if (typeof object.newDevice !== "object")
                    throw TypeError(".messages.Link.newDevice: object expected");
                message.newDevice = $root.messages.NewDevice.fromObject(object.newDevice);
            }
            return message;
        };

        /**
         * Creates a plain object from a Link message. Also converts values to other types if specified.
         * @param {messages.Link} message Link
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Link.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.prev = options.bytes === String ? "" : [];
                object.sequenceNumber = 0;
            }
            if (message.prev != null && message.hasOwnProperty("prev"))
                object.prev = options.bytes === String ? $util.base64.encode(message.prev, 0, message.prev.length) : options.bytes === Array ? Array.prototype.slice.call(message.prev) : message.prev;
            if (message.sequenceNumber != null && message.hasOwnProperty("sequenceNumber"))
                object.sequenceNumber = message.sequenceNumber;
            if (message.newDevice != null && message.hasOwnProperty("newDevice")) {
                object.newDevice = $root.messages.NewDevice.toObject(message.newDevice, options);
                if (options.oneofs)
                    object.body = "newDevice";
            }
            return object;
        };

        /**
         * Converts this Link to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        Link.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Link;
    })();

    return messages;
})();

export { $root as default };
