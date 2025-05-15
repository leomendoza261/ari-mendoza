
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model alergias
 * 
 */
export type alergias = $Result.DefaultSelection<Prisma.$alergiasPayload>
/**
 * Model consultas
 * 
 */
export type consultas = $Result.DefaultSelection<Prisma.$consultasPayload>
/**
 * Model contactos_emergencia
 * 
 */
export type contactos_emergencia = $Result.DefaultSelection<Prisma.$contactos_emergenciaPayload>
/**
 * Model enfermedades
 * 
 */
export type enfermedades = $Result.DefaultSelection<Prisma.$enfermedadesPayload>
/**
 * Model historial_cirugias
 * 
 */
export type historial_cirugias = $Result.DefaultSelection<Prisma.$historial_cirugiasPayload>
/**
 * Model medicamentos_actuales
 * 
 */
export type medicamentos_actuales = $Result.DefaultSelection<Prisma.$medicamentos_actualesPayload>
/**
 * Model pacientes
 * 
 */
export type pacientes = $Result.DefaultSelection<Prisma.$pacientesPayload>
/**
 * Model tipos_sangre
 * 
 */
export type tipos_sangre = $Result.DefaultSelection<Prisma.$tipos_sangrePayload>
/**
 * Model tutores_legales
 * 
 */
export type tutores_legales = $Result.DefaultSelection<Prisma.$tutores_legalesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Alergias
 * const alergias = await prisma.alergias.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Alergias
   * const alergias = await prisma.alergias.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.alergias`: Exposes CRUD operations for the **alergias** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alergias
    * const alergias = await prisma.alergias.findMany()
    * ```
    */
  get alergias(): Prisma.alergiasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.consultas`: Exposes CRUD operations for the **consultas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Consultas
    * const consultas = await prisma.consultas.findMany()
    * ```
    */
  get consultas(): Prisma.consultasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactos_emergencia`: Exposes CRUD operations for the **contactos_emergencia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contactos_emergencias
    * const contactos_emergencias = await prisma.contactos_emergencia.findMany()
    * ```
    */
  get contactos_emergencia(): Prisma.contactos_emergenciaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enfermedades`: Exposes CRUD operations for the **enfermedades** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enfermedades
    * const enfermedades = await prisma.enfermedades.findMany()
    * ```
    */
  get enfermedades(): Prisma.enfermedadesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historial_cirugias`: Exposes CRUD operations for the **historial_cirugias** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Historial_cirugias
    * const historial_cirugias = await prisma.historial_cirugias.findMany()
    * ```
    */
  get historial_cirugias(): Prisma.historial_cirugiasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicamentos_actuales`: Exposes CRUD operations for the **medicamentos_actuales** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medicamentos_actuales
    * const medicamentos_actuales = await prisma.medicamentos_actuales.findMany()
    * ```
    */
  get medicamentos_actuales(): Prisma.medicamentos_actualesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pacientes`: Exposes CRUD operations for the **pacientes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pacientes
    * const pacientes = await prisma.pacientes.findMany()
    * ```
    */
  get pacientes(): Prisma.pacientesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipos_sangre`: Exposes CRUD operations for the **tipos_sangre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tipos_sangres
    * const tipos_sangres = await prisma.tipos_sangre.findMany()
    * ```
    */
  get tipos_sangre(): Prisma.tipos_sangreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tutores_legales`: Exposes CRUD operations for the **tutores_legales** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tutores_legales
    * const tutores_legales = await prisma.tutores_legales.findMany()
    * ```
    */
  get tutores_legales(): Prisma.tutores_legalesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    alergias: 'alergias',
    consultas: 'consultas',
    contactos_emergencia: 'contactos_emergencia',
    enfermedades: 'enfermedades',
    historial_cirugias: 'historial_cirugias',
    medicamentos_actuales: 'medicamentos_actuales',
    pacientes: 'pacientes',
    tipos_sangre: 'tipos_sangre',
    tutores_legales: 'tutores_legales'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "alergias" | "consultas" | "contactos_emergencia" | "enfermedades" | "historial_cirugias" | "medicamentos_actuales" | "pacientes" | "tipos_sangre" | "tutores_legales"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      alergias: {
        payload: Prisma.$alergiasPayload<ExtArgs>
        fields: Prisma.alergiasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.alergiasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alergiasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.alergiasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alergiasPayload>
          }
          findFirst: {
            args: Prisma.alergiasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alergiasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.alergiasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alergiasPayload>
          }
          findMany: {
            args: Prisma.alergiasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alergiasPayload>[]
          }
          create: {
            args: Prisma.alergiasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alergiasPayload>
          }
          createMany: {
            args: Prisma.alergiasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.alergiasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alergiasPayload>[]
          }
          delete: {
            args: Prisma.alergiasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alergiasPayload>
          }
          update: {
            args: Prisma.alergiasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alergiasPayload>
          }
          deleteMany: {
            args: Prisma.alergiasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.alergiasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.alergiasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alergiasPayload>[]
          }
          upsert: {
            args: Prisma.alergiasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alergiasPayload>
          }
          aggregate: {
            args: Prisma.AlergiasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlergias>
          }
          groupBy: {
            args: Prisma.alergiasGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlergiasGroupByOutputType>[]
          }
          count: {
            args: Prisma.alergiasCountArgs<ExtArgs>
            result: $Utils.Optional<AlergiasCountAggregateOutputType> | number
          }
        }
      }
      consultas: {
        payload: Prisma.$consultasPayload<ExtArgs>
        fields: Prisma.consultasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.consultasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consultasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.consultasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consultasPayload>
          }
          findFirst: {
            args: Prisma.consultasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consultasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.consultasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consultasPayload>
          }
          findMany: {
            args: Prisma.consultasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consultasPayload>[]
          }
          create: {
            args: Prisma.consultasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consultasPayload>
          }
          createMany: {
            args: Prisma.consultasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.consultasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consultasPayload>[]
          }
          delete: {
            args: Prisma.consultasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consultasPayload>
          }
          update: {
            args: Prisma.consultasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consultasPayload>
          }
          deleteMany: {
            args: Prisma.consultasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.consultasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.consultasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consultasPayload>[]
          }
          upsert: {
            args: Prisma.consultasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consultasPayload>
          }
          aggregate: {
            args: Prisma.ConsultasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsultas>
          }
          groupBy: {
            args: Prisma.consultasGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsultasGroupByOutputType>[]
          }
          count: {
            args: Prisma.consultasCountArgs<ExtArgs>
            result: $Utils.Optional<ConsultasCountAggregateOutputType> | number
          }
        }
      }
      contactos_emergencia: {
        payload: Prisma.$contactos_emergenciaPayload<ExtArgs>
        fields: Prisma.contactos_emergenciaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.contactos_emergenciaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactos_emergenciaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.contactos_emergenciaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactos_emergenciaPayload>
          }
          findFirst: {
            args: Prisma.contactos_emergenciaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactos_emergenciaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.contactos_emergenciaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactos_emergenciaPayload>
          }
          findMany: {
            args: Prisma.contactos_emergenciaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactos_emergenciaPayload>[]
          }
          create: {
            args: Prisma.contactos_emergenciaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactos_emergenciaPayload>
          }
          createMany: {
            args: Prisma.contactos_emergenciaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.contactos_emergenciaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactos_emergenciaPayload>[]
          }
          delete: {
            args: Prisma.contactos_emergenciaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactos_emergenciaPayload>
          }
          update: {
            args: Prisma.contactos_emergenciaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactos_emergenciaPayload>
          }
          deleteMany: {
            args: Prisma.contactos_emergenciaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.contactos_emergenciaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.contactos_emergenciaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactos_emergenciaPayload>[]
          }
          upsert: {
            args: Prisma.contactos_emergenciaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactos_emergenciaPayload>
          }
          aggregate: {
            args: Prisma.Contactos_emergenciaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactos_emergencia>
          }
          groupBy: {
            args: Prisma.contactos_emergenciaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Contactos_emergenciaGroupByOutputType>[]
          }
          count: {
            args: Prisma.contactos_emergenciaCountArgs<ExtArgs>
            result: $Utils.Optional<Contactos_emergenciaCountAggregateOutputType> | number
          }
        }
      }
      enfermedades: {
        payload: Prisma.$enfermedadesPayload<ExtArgs>
        fields: Prisma.enfermedadesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.enfermedadesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enfermedadesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.enfermedadesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enfermedadesPayload>
          }
          findFirst: {
            args: Prisma.enfermedadesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enfermedadesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.enfermedadesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enfermedadesPayload>
          }
          findMany: {
            args: Prisma.enfermedadesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enfermedadesPayload>[]
          }
          create: {
            args: Prisma.enfermedadesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enfermedadesPayload>
          }
          createMany: {
            args: Prisma.enfermedadesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.enfermedadesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enfermedadesPayload>[]
          }
          delete: {
            args: Prisma.enfermedadesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enfermedadesPayload>
          }
          update: {
            args: Prisma.enfermedadesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enfermedadesPayload>
          }
          deleteMany: {
            args: Prisma.enfermedadesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.enfermedadesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.enfermedadesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enfermedadesPayload>[]
          }
          upsert: {
            args: Prisma.enfermedadesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enfermedadesPayload>
          }
          aggregate: {
            args: Prisma.EnfermedadesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnfermedades>
          }
          groupBy: {
            args: Prisma.enfermedadesGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnfermedadesGroupByOutputType>[]
          }
          count: {
            args: Prisma.enfermedadesCountArgs<ExtArgs>
            result: $Utils.Optional<EnfermedadesCountAggregateOutputType> | number
          }
        }
      }
      historial_cirugias: {
        payload: Prisma.$historial_cirugiasPayload<ExtArgs>
        fields: Prisma.historial_cirugiasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.historial_cirugiasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_cirugiasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.historial_cirugiasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_cirugiasPayload>
          }
          findFirst: {
            args: Prisma.historial_cirugiasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_cirugiasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.historial_cirugiasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_cirugiasPayload>
          }
          findMany: {
            args: Prisma.historial_cirugiasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_cirugiasPayload>[]
          }
          create: {
            args: Prisma.historial_cirugiasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_cirugiasPayload>
          }
          createMany: {
            args: Prisma.historial_cirugiasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.historial_cirugiasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_cirugiasPayload>[]
          }
          delete: {
            args: Prisma.historial_cirugiasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_cirugiasPayload>
          }
          update: {
            args: Prisma.historial_cirugiasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_cirugiasPayload>
          }
          deleteMany: {
            args: Prisma.historial_cirugiasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.historial_cirugiasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.historial_cirugiasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_cirugiasPayload>[]
          }
          upsert: {
            args: Prisma.historial_cirugiasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_cirugiasPayload>
          }
          aggregate: {
            args: Prisma.Historial_cirugiasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistorial_cirugias>
          }
          groupBy: {
            args: Prisma.historial_cirugiasGroupByArgs<ExtArgs>
            result: $Utils.Optional<Historial_cirugiasGroupByOutputType>[]
          }
          count: {
            args: Prisma.historial_cirugiasCountArgs<ExtArgs>
            result: $Utils.Optional<Historial_cirugiasCountAggregateOutputType> | number
          }
        }
      }
      medicamentos_actuales: {
        payload: Prisma.$medicamentos_actualesPayload<ExtArgs>
        fields: Prisma.medicamentos_actualesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.medicamentos_actualesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicamentos_actualesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.medicamentos_actualesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicamentos_actualesPayload>
          }
          findFirst: {
            args: Prisma.medicamentos_actualesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicamentos_actualesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.medicamentos_actualesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicamentos_actualesPayload>
          }
          findMany: {
            args: Prisma.medicamentos_actualesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicamentos_actualesPayload>[]
          }
          create: {
            args: Prisma.medicamentos_actualesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicamentos_actualesPayload>
          }
          createMany: {
            args: Prisma.medicamentos_actualesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.medicamentos_actualesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicamentos_actualesPayload>[]
          }
          delete: {
            args: Prisma.medicamentos_actualesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicamentos_actualesPayload>
          }
          update: {
            args: Prisma.medicamentos_actualesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicamentos_actualesPayload>
          }
          deleteMany: {
            args: Prisma.medicamentos_actualesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.medicamentos_actualesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.medicamentos_actualesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicamentos_actualesPayload>[]
          }
          upsert: {
            args: Prisma.medicamentos_actualesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicamentos_actualesPayload>
          }
          aggregate: {
            args: Prisma.Medicamentos_actualesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicamentos_actuales>
          }
          groupBy: {
            args: Prisma.medicamentos_actualesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Medicamentos_actualesGroupByOutputType>[]
          }
          count: {
            args: Prisma.medicamentos_actualesCountArgs<ExtArgs>
            result: $Utils.Optional<Medicamentos_actualesCountAggregateOutputType> | number
          }
        }
      }
      pacientes: {
        payload: Prisma.$pacientesPayload<ExtArgs>
        fields: Prisma.pacientesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pacientesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pacientesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          findFirst: {
            args: Prisma.pacientesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pacientesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          findMany: {
            args: Prisma.pacientesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>[]
          }
          create: {
            args: Prisma.pacientesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          createMany: {
            args: Prisma.pacientesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pacientesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>[]
          }
          delete: {
            args: Prisma.pacientesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          update: {
            args: Prisma.pacientesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          deleteMany: {
            args: Prisma.pacientesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pacientesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pacientesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>[]
          }
          upsert: {
            args: Prisma.pacientesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          aggregate: {
            args: Prisma.PacientesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePacientes>
          }
          groupBy: {
            args: Prisma.pacientesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PacientesGroupByOutputType>[]
          }
          count: {
            args: Prisma.pacientesCountArgs<ExtArgs>
            result: $Utils.Optional<PacientesCountAggregateOutputType> | number
          }
        }
      }
      tipos_sangre: {
        payload: Prisma.$tipos_sangrePayload<ExtArgs>
        fields: Prisma.tipos_sangreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tipos_sangreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipos_sangrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tipos_sangreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipos_sangrePayload>
          }
          findFirst: {
            args: Prisma.tipos_sangreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipos_sangrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tipos_sangreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipos_sangrePayload>
          }
          findMany: {
            args: Prisma.tipos_sangreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipos_sangrePayload>[]
          }
          create: {
            args: Prisma.tipos_sangreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipos_sangrePayload>
          }
          createMany: {
            args: Prisma.tipos_sangreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tipos_sangreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipos_sangrePayload>[]
          }
          delete: {
            args: Prisma.tipos_sangreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipos_sangrePayload>
          }
          update: {
            args: Prisma.tipos_sangreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipos_sangrePayload>
          }
          deleteMany: {
            args: Prisma.tipos_sangreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tipos_sangreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tipos_sangreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipos_sangrePayload>[]
          }
          upsert: {
            args: Prisma.tipos_sangreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipos_sangrePayload>
          }
          aggregate: {
            args: Prisma.Tipos_sangreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipos_sangre>
          }
          groupBy: {
            args: Prisma.tipos_sangreGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tipos_sangreGroupByOutputType>[]
          }
          count: {
            args: Prisma.tipos_sangreCountArgs<ExtArgs>
            result: $Utils.Optional<Tipos_sangreCountAggregateOutputType> | number
          }
        }
      }
      tutores_legales: {
        payload: Prisma.$tutores_legalesPayload<ExtArgs>
        fields: Prisma.tutores_legalesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tutores_legalesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutores_legalesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tutores_legalesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutores_legalesPayload>
          }
          findFirst: {
            args: Prisma.tutores_legalesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutores_legalesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tutores_legalesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutores_legalesPayload>
          }
          findMany: {
            args: Prisma.tutores_legalesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutores_legalesPayload>[]
          }
          create: {
            args: Prisma.tutores_legalesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutores_legalesPayload>
          }
          createMany: {
            args: Prisma.tutores_legalesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tutores_legalesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutores_legalesPayload>[]
          }
          delete: {
            args: Prisma.tutores_legalesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutores_legalesPayload>
          }
          update: {
            args: Prisma.tutores_legalesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutores_legalesPayload>
          }
          deleteMany: {
            args: Prisma.tutores_legalesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tutores_legalesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tutores_legalesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutores_legalesPayload>[]
          }
          upsert: {
            args: Prisma.tutores_legalesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tutores_legalesPayload>
          }
          aggregate: {
            args: Prisma.Tutores_legalesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTutores_legales>
          }
          groupBy: {
            args: Prisma.tutores_legalesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tutores_legalesGroupByOutputType>[]
          }
          count: {
            args: Prisma.tutores_legalesCountArgs<ExtArgs>
            result: $Utils.Optional<Tutores_legalesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    alergias?: alergiasOmit
    consultas?: consultasOmit
    contactos_emergencia?: contactos_emergenciaOmit
    enfermedades?: enfermedadesOmit
    historial_cirugias?: historial_cirugiasOmit
    medicamentos_actuales?: medicamentos_actualesOmit
    pacientes?: pacientesOmit
    tipos_sangre?: tipos_sangreOmit
    tutores_legales?: tutores_legalesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PacientesCountOutputType
   */

  export type PacientesCountOutputType = {
    alergias: number
    consultas: number
    contactos_emergencia: number
    enfermedades: number
    historial_cirugias: number
    medicamentos_actuales: number
  }

  export type PacientesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alergias?: boolean | PacientesCountOutputTypeCountAlergiasArgs
    consultas?: boolean | PacientesCountOutputTypeCountConsultasArgs
    contactos_emergencia?: boolean | PacientesCountOutputTypeCountContactos_emergenciaArgs
    enfermedades?: boolean | PacientesCountOutputTypeCountEnfermedadesArgs
    historial_cirugias?: boolean | PacientesCountOutputTypeCountHistorial_cirugiasArgs
    medicamentos_actuales?: boolean | PacientesCountOutputTypeCountMedicamentos_actualesArgs
  }

  // Custom InputTypes
  /**
   * PacientesCountOutputType without action
   */
  export type PacientesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacientesCountOutputType
     */
    select?: PacientesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PacientesCountOutputType without action
   */
  export type PacientesCountOutputTypeCountAlergiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: alergiasWhereInput
  }

  /**
   * PacientesCountOutputType without action
   */
  export type PacientesCountOutputTypeCountConsultasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: consultasWhereInput
  }

  /**
   * PacientesCountOutputType without action
   */
  export type PacientesCountOutputTypeCountContactos_emergenciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contactos_emergenciaWhereInput
  }

  /**
   * PacientesCountOutputType without action
   */
  export type PacientesCountOutputTypeCountEnfermedadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enfermedadesWhereInput
  }

  /**
   * PacientesCountOutputType without action
   */
  export type PacientesCountOutputTypeCountHistorial_cirugiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: historial_cirugiasWhereInput
  }

  /**
   * PacientesCountOutputType without action
   */
  export type PacientesCountOutputTypeCountMedicamentos_actualesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: medicamentos_actualesWhereInput
  }


  /**
   * Count Type Tipos_sangreCountOutputType
   */

  export type Tipos_sangreCountOutputType = {
    pacientes: number
  }

  export type Tipos_sangreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | Tipos_sangreCountOutputTypeCountPacientesArgs
  }

  // Custom InputTypes
  /**
   * Tipos_sangreCountOutputType without action
   */
  export type Tipos_sangreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipos_sangreCountOutputType
     */
    select?: Tipos_sangreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tipos_sangreCountOutputType without action
   */
  export type Tipos_sangreCountOutputTypeCountPacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pacientesWhereInput
  }


  /**
   * Count Type Tutores_legalesCountOutputType
   */

  export type Tutores_legalesCountOutputType = {
    pacientes: number
  }

  export type Tutores_legalesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | Tutores_legalesCountOutputTypeCountPacientesArgs
  }

  // Custom InputTypes
  /**
   * Tutores_legalesCountOutputType without action
   */
  export type Tutores_legalesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutores_legalesCountOutputType
     */
    select?: Tutores_legalesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tutores_legalesCountOutputType without action
   */
  export type Tutores_legalesCountOutputTypeCountPacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pacientesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model alergias
   */

  export type AggregateAlergias = {
    _count: AlergiasCountAggregateOutputType | null
    _avg: AlergiasAvgAggregateOutputType | null
    _sum: AlergiasSumAggregateOutputType | null
    _min: AlergiasMinAggregateOutputType | null
    _max: AlergiasMaxAggregateOutputType | null
  }

  export type AlergiasAvgAggregateOutputType = {
    id: number | null
    paciente_id: number | null
  }

  export type AlergiasSumAggregateOutputType = {
    id: number | null
    paciente_id: number | null
  }

  export type AlergiasMinAggregateOutputType = {
    id: number | null
    paciente_id: number | null
    alergia: string | null
  }

  export type AlergiasMaxAggregateOutputType = {
    id: number | null
    paciente_id: number | null
    alergia: string | null
  }

  export type AlergiasCountAggregateOutputType = {
    id: number
    paciente_id: number
    alergia: number
    _all: number
  }


  export type AlergiasAvgAggregateInputType = {
    id?: true
    paciente_id?: true
  }

  export type AlergiasSumAggregateInputType = {
    id?: true
    paciente_id?: true
  }

  export type AlergiasMinAggregateInputType = {
    id?: true
    paciente_id?: true
    alergia?: true
  }

  export type AlergiasMaxAggregateInputType = {
    id?: true
    paciente_id?: true
    alergia?: true
  }

  export type AlergiasCountAggregateInputType = {
    id?: true
    paciente_id?: true
    alergia?: true
    _all?: true
  }

  export type AlergiasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which alergias to aggregate.
     */
    where?: alergiasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alergias to fetch.
     */
    orderBy?: alergiasOrderByWithRelationInput | alergiasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: alergiasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alergias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alergias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned alergias
    **/
    _count?: true | AlergiasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlergiasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlergiasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlergiasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlergiasMaxAggregateInputType
  }

  export type GetAlergiasAggregateType<T extends AlergiasAggregateArgs> = {
        [P in keyof T & keyof AggregateAlergias]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlergias[P]>
      : GetScalarType<T[P], AggregateAlergias[P]>
  }




  export type alergiasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: alergiasWhereInput
    orderBy?: alergiasOrderByWithAggregationInput | alergiasOrderByWithAggregationInput[]
    by: AlergiasScalarFieldEnum[] | AlergiasScalarFieldEnum
    having?: alergiasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlergiasCountAggregateInputType | true
    _avg?: AlergiasAvgAggregateInputType
    _sum?: AlergiasSumAggregateInputType
    _min?: AlergiasMinAggregateInputType
    _max?: AlergiasMaxAggregateInputType
  }

  export type AlergiasGroupByOutputType = {
    id: number
    paciente_id: number | null
    alergia: string
    _count: AlergiasCountAggregateOutputType | null
    _avg: AlergiasAvgAggregateOutputType | null
    _sum: AlergiasSumAggregateOutputType | null
    _min: AlergiasMinAggregateOutputType | null
    _max: AlergiasMaxAggregateOutputType | null
  }

  type GetAlergiasGroupByPayload<T extends alergiasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlergiasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlergiasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlergiasGroupByOutputType[P]>
            : GetScalarType<T[P], AlergiasGroupByOutputType[P]>
        }
      >
    >


  export type alergiasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paciente_id?: boolean
    alergia?: boolean
    pacientes?: boolean | alergias$pacientesArgs<ExtArgs>
  }, ExtArgs["result"]["alergias"]>

  export type alergiasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paciente_id?: boolean
    alergia?: boolean
    pacientes?: boolean | alergias$pacientesArgs<ExtArgs>
  }, ExtArgs["result"]["alergias"]>

  export type alergiasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paciente_id?: boolean
    alergia?: boolean
    pacientes?: boolean | alergias$pacientesArgs<ExtArgs>
  }, ExtArgs["result"]["alergias"]>

  export type alergiasSelectScalar = {
    id?: boolean
    paciente_id?: boolean
    alergia?: boolean
  }

  export type alergiasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "paciente_id" | "alergia", ExtArgs["result"]["alergias"]>
  export type alergiasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | alergias$pacientesArgs<ExtArgs>
  }
  export type alergiasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | alergias$pacientesArgs<ExtArgs>
  }
  export type alergiasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | alergias$pacientesArgs<ExtArgs>
  }

  export type $alergiasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "alergias"
    objects: {
      pacientes: Prisma.$pacientesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      paciente_id: number | null
      alergia: string
    }, ExtArgs["result"]["alergias"]>
    composites: {}
  }

  type alergiasGetPayload<S extends boolean | null | undefined | alergiasDefaultArgs> = $Result.GetResult<Prisma.$alergiasPayload, S>

  type alergiasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<alergiasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlergiasCountAggregateInputType | true
    }

  export interface alergiasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['alergias'], meta: { name: 'alergias' } }
    /**
     * Find zero or one Alergias that matches the filter.
     * @param {alergiasFindUniqueArgs} args - Arguments to find a Alergias
     * @example
     * // Get one Alergias
     * const alergias = await prisma.alergias.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends alergiasFindUniqueArgs>(args: SelectSubset<T, alergiasFindUniqueArgs<ExtArgs>>): Prisma__alergiasClient<$Result.GetResult<Prisma.$alergiasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alergias that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {alergiasFindUniqueOrThrowArgs} args - Arguments to find a Alergias
     * @example
     * // Get one Alergias
     * const alergias = await prisma.alergias.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends alergiasFindUniqueOrThrowArgs>(args: SelectSubset<T, alergiasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__alergiasClient<$Result.GetResult<Prisma.$alergiasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alergias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alergiasFindFirstArgs} args - Arguments to find a Alergias
     * @example
     * // Get one Alergias
     * const alergias = await prisma.alergias.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends alergiasFindFirstArgs>(args?: SelectSubset<T, alergiasFindFirstArgs<ExtArgs>>): Prisma__alergiasClient<$Result.GetResult<Prisma.$alergiasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alergias that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alergiasFindFirstOrThrowArgs} args - Arguments to find a Alergias
     * @example
     * // Get one Alergias
     * const alergias = await prisma.alergias.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends alergiasFindFirstOrThrowArgs>(args?: SelectSubset<T, alergiasFindFirstOrThrowArgs<ExtArgs>>): Prisma__alergiasClient<$Result.GetResult<Prisma.$alergiasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alergias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alergiasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alergias
     * const alergias = await prisma.alergias.findMany()
     * 
     * // Get first 10 Alergias
     * const alergias = await prisma.alergias.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alergiasWithIdOnly = await prisma.alergias.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends alergiasFindManyArgs>(args?: SelectSubset<T, alergiasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alergiasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alergias.
     * @param {alergiasCreateArgs} args - Arguments to create a Alergias.
     * @example
     * // Create one Alergias
     * const Alergias = await prisma.alergias.create({
     *   data: {
     *     // ... data to create a Alergias
     *   }
     * })
     * 
     */
    create<T extends alergiasCreateArgs>(args: SelectSubset<T, alergiasCreateArgs<ExtArgs>>): Prisma__alergiasClient<$Result.GetResult<Prisma.$alergiasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alergias.
     * @param {alergiasCreateManyArgs} args - Arguments to create many Alergias.
     * @example
     * // Create many Alergias
     * const alergias = await prisma.alergias.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends alergiasCreateManyArgs>(args?: SelectSubset<T, alergiasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alergias and returns the data saved in the database.
     * @param {alergiasCreateManyAndReturnArgs} args - Arguments to create many Alergias.
     * @example
     * // Create many Alergias
     * const alergias = await prisma.alergias.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alergias and only return the `id`
     * const alergiasWithIdOnly = await prisma.alergias.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends alergiasCreateManyAndReturnArgs>(args?: SelectSubset<T, alergiasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alergiasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Alergias.
     * @param {alergiasDeleteArgs} args - Arguments to delete one Alergias.
     * @example
     * // Delete one Alergias
     * const Alergias = await prisma.alergias.delete({
     *   where: {
     *     // ... filter to delete one Alergias
     *   }
     * })
     * 
     */
    delete<T extends alergiasDeleteArgs>(args: SelectSubset<T, alergiasDeleteArgs<ExtArgs>>): Prisma__alergiasClient<$Result.GetResult<Prisma.$alergiasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alergias.
     * @param {alergiasUpdateArgs} args - Arguments to update one Alergias.
     * @example
     * // Update one Alergias
     * const alergias = await prisma.alergias.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends alergiasUpdateArgs>(args: SelectSubset<T, alergiasUpdateArgs<ExtArgs>>): Prisma__alergiasClient<$Result.GetResult<Prisma.$alergiasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alergias.
     * @param {alergiasDeleteManyArgs} args - Arguments to filter Alergias to delete.
     * @example
     * // Delete a few Alergias
     * const { count } = await prisma.alergias.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends alergiasDeleteManyArgs>(args?: SelectSubset<T, alergiasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alergias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alergiasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alergias
     * const alergias = await prisma.alergias.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends alergiasUpdateManyArgs>(args: SelectSubset<T, alergiasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alergias and returns the data updated in the database.
     * @param {alergiasUpdateManyAndReturnArgs} args - Arguments to update many Alergias.
     * @example
     * // Update many Alergias
     * const alergias = await prisma.alergias.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alergias and only return the `id`
     * const alergiasWithIdOnly = await prisma.alergias.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends alergiasUpdateManyAndReturnArgs>(args: SelectSubset<T, alergiasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alergiasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Alergias.
     * @param {alergiasUpsertArgs} args - Arguments to update or create a Alergias.
     * @example
     * // Update or create a Alergias
     * const alergias = await prisma.alergias.upsert({
     *   create: {
     *     // ... data to create a Alergias
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alergias we want to update
     *   }
     * })
     */
    upsert<T extends alergiasUpsertArgs>(args: SelectSubset<T, alergiasUpsertArgs<ExtArgs>>): Prisma__alergiasClient<$Result.GetResult<Prisma.$alergiasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alergias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alergiasCountArgs} args - Arguments to filter Alergias to count.
     * @example
     * // Count the number of Alergias
     * const count = await prisma.alergias.count({
     *   where: {
     *     // ... the filter for the Alergias we want to count
     *   }
     * })
    **/
    count<T extends alergiasCountArgs>(
      args?: Subset<T, alergiasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlergiasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alergias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlergiasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlergiasAggregateArgs>(args: Subset<T, AlergiasAggregateArgs>): Prisma.PrismaPromise<GetAlergiasAggregateType<T>>

    /**
     * Group by Alergias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alergiasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends alergiasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: alergiasGroupByArgs['orderBy'] }
        : { orderBy?: alergiasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, alergiasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlergiasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the alergias model
   */
  readonly fields: alergiasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for alergias.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__alergiasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pacientes<T extends alergias$pacientesArgs<ExtArgs> = {}>(args?: Subset<T, alergias$pacientesArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the alergias model
   */
  interface alergiasFieldRefs {
    readonly id: FieldRef<"alergias", 'Int'>
    readonly paciente_id: FieldRef<"alergias", 'Int'>
    readonly alergia: FieldRef<"alergias", 'String'>
  }
    

  // Custom InputTypes
  /**
   * alergias findUnique
   */
  export type alergiasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alergias
     */
    select?: alergiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alergias
     */
    omit?: alergiasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alergiasInclude<ExtArgs> | null
    /**
     * Filter, which alergias to fetch.
     */
    where: alergiasWhereUniqueInput
  }

  /**
   * alergias findUniqueOrThrow
   */
  export type alergiasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alergias
     */
    select?: alergiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alergias
     */
    omit?: alergiasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alergiasInclude<ExtArgs> | null
    /**
     * Filter, which alergias to fetch.
     */
    where: alergiasWhereUniqueInput
  }

  /**
   * alergias findFirst
   */
  export type alergiasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alergias
     */
    select?: alergiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alergias
     */
    omit?: alergiasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alergiasInclude<ExtArgs> | null
    /**
     * Filter, which alergias to fetch.
     */
    where?: alergiasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alergias to fetch.
     */
    orderBy?: alergiasOrderByWithRelationInput | alergiasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for alergias.
     */
    cursor?: alergiasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alergias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alergias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of alergias.
     */
    distinct?: AlergiasScalarFieldEnum | AlergiasScalarFieldEnum[]
  }

  /**
   * alergias findFirstOrThrow
   */
  export type alergiasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alergias
     */
    select?: alergiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alergias
     */
    omit?: alergiasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alergiasInclude<ExtArgs> | null
    /**
     * Filter, which alergias to fetch.
     */
    where?: alergiasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alergias to fetch.
     */
    orderBy?: alergiasOrderByWithRelationInput | alergiasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for alergias.
     */
    cursor?: alergiasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alergias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alergias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of alergias.
     */
    distinct?: AlergiasScalarFieldEnum | AlergiasScalarFieldEnum[]
  }

  /**
   * alergias findMany
   */
  export type alergiasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alergias
     */
    select?: alergiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alergias
     */
    omit?: alergiasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alergiasInclude<ExtArgs> | null
    /**
     * Filter, which alergias to fetch.
     */
    where?: alergiasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alergias to fetch.
     */
    orderBy?: alergiasOrderByWithRelationInput | alergiasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing alergias.
     */
    cursor?: alergiasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alergias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alergias.
     */
    skip?: number
    distinct?: AlergiasScalarFieldEnum | AlergiasScalarFieldEnum[]
  }

  /**
   * alergias create
   */
  export type alergiasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alergias
     */
    select?: alergiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alergias
     */
    omit?: alergiasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alergiasInclude<ExtArgs> | null
    /**
     * The data needed to create a alergias.
     */
    data: XOR<alergiasCreateInput, alergiasUncheckedCreateInput>
  }

  /**
   * alergias createMany
   */
  export type alergiasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many alergias.
     */
    data: alergiasCreateManyInput | alergiasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * alergias createManyAndReturn
   */
  export type alergiasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alergias
     */
    select?: alergiasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the alergias
     */
    omit?: alergiasOmit<ExtArgs> | null
    /**
     * The data used to create many alergias.
     */
    data: alergiasCreateManyInput | alergiasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alergiasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * alergias update
   */
  export type alergiasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alergias
     */
    select?: alergiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alergias
     */
    omit?: alergiasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alergiasInclude<ExtArgs> | null
    /**
     * The data needed to update a alergias.
     */
    data: XOR<alergiasUpdateInput, alergiasUncheckedUpdateInput>
    /**
     * Choose, which alergias to update.
     */
    where: alergiasWhereUniqueInput
  }

  /**
   * alergias updateMany
   */
  export type alergiasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update alergias.
     */
    data: XOR<alergiasUpdateManyMutationInput, alergiasUncheckedUpdateManyInput>
    /**
     * Filter which alergias to update
     */
    where?: alergiasWhereInput
    /**
     * Limit how many alergias to update.
     */
    limit?: number
  }

  /**
   * alergias updateManyAndReturn
   */
  export type alergiasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alergias
     */
    select?: alergiasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the alergias
     */
    omit?: alergiasOmit<ExtArgs> | null
    /**
     * The data used to update alergias.
     */
    data: XOR<alergiasUpdateManyMutationInput, alergiasUncheckedUpdateManyInput>
    /**
     * Filter which alergias to update
     */
    where?: alergiasWhereInput
    /**
     * Limit how many alergias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alergiasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * alergias upsert
   */
  export type alergiasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alergias
     */
    select?: alergiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alergias
     */
    omit?: alergiasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alergiasInclude<ExtArgs> | null
    /**
     * The filter to search for the alergias to update in case it exists.
     */
    where: alergiasWhereUniqueInput
    /**
     * In case the alergias found by the `where` argument doesn't exist, create a new alergias with this data.
     */
    create: XOR<alergiasCreateInput, alergiasUncheckedCreateInput>
    /**
     * In case the alergias was found with the provided `where` argument, update it with this data.
     */
    update: XOR<alergiasUpdateInput, alergiasUncheckedUpdateInput>
  }

  /**
   * alergias delete
   */
  export type alergiasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alergias
     */
    select?: alergiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alergias
     */
    omit?: alergiasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alergiasInclude<ExtArgs> | null
    /**
     * Filter which alergias to delete.
     */
    where: alergiasWhereUniqueInput
  }

  /**
   * alergias deleteMany
   */
  export type alergiasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which alergias to delete
     */
    where?: alergiasWhereInput
    /**
     * Limit how many alergias to delete.
     */
    limit?: number
  }

  /**
   * alergias.pacientes
   */
  export type alergias$pacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    where?: pacientesWhereInput
  }

  /**
   * alergias without action
   */
  export type alergiasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alergias
     */
    select?: alergiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alergias
     */
    omit?: alergiasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alergiasInclude<ExtArgs> | null
  }


  /**
   * Model consultas
   */

  export type AggregateConsultas = {
    _count: ConsultasCountAggregateOutputType | null
    _avg: ConsultasAvgAggregateOutputType | null
    _sum: ConsultasSumAggregateOutputType | null
    _min: ConsultasMinAggregateOutputType | null
    _max: ConsultasMaxAggregateOutputType | null
  }

  export type ConsultasAvgAggregateOutputType = {
    id: number | null
    paciente_id: number | null
  }

  export type ConsultasSumAggregateOutputType = {
    id: number | null
    paciente_id: number | null
  }

  export type ConsultasMinAggregateOutputType = {
    id: number | null
    paciente_id: number | null
    fecha_consulta: Date | null
    hora_consulta: Date | null
    motivo: string | null
    diagnostico: string | null
    tratamiento: string | null
    notas: string | null
  }

  export type ConsultasMaxAggregateOutputType = {
    id: number | null
    paciente_id: number | null
    fecha_consulta: Date | null
    hora_consulta: Date | null
    motivo: string | null
    diagnostico: string | null
    tratamiento: string | null
    notas: string | null
  }

  export type ConsultasCountAggregateOutputType = {
    id: number
    paciente_id: number
    fecha_consulta: number
    hora_consulta: number
    motivo: number
    diagnostico: number
    tratamiento: number
    imagenes: number
    notas: number
    _all: number
  }


  export type ConsultasAvgAggregateInputType = {
    id?: true
    paciente_id?: true
  }

  export type ConsultasSumAggregateInputType = {
    id?: true
    paciente_id?: true
  }

  export type ConsultasMinAggregateInputType = {
    id?: true
    paciente_id?: true
    fecha_consulta?: true
    hora_consulta?: true
    motivo?: true
    diagnostico?: true
    tratamiento?: true
    notas?: true
  }

  export type ConsultasMaxAggregateInputType = {
    id?: true
    paciente_id?: true
    fecha_consulta?: true
    hora_consulta?: true
    motivo?: true
    diagnostico?: true
    tratamiento?: true
    notas?: true
  }

  export type ConsultasCountAggregateInputType = {
    id?: true
    paciente_id?: true
    fecha_consulta?: true
    hora_consulta?: true
    motivo?: true
    diagnostico?: true
    tratamiento?: true
    imagenes?: true
    notas?: true
    _all?: true
  }

  export type ConsultasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which consultas to aggregate.
     */
    where?: consultasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of consultas to fetch.
     */
    orderBy?: consultasOrderByWithRelationInput | consultasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: consultasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` consultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned consultas
    **/
    _count?: true | ConsultasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConsultasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConsultasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsultasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsultasMaxAggregateInputType
  }

  export type GetConsultasAggregateType<T extends ConsultasAggregateArgs> = {
        [P in keyof T & keyof AggregateConsultas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsultas[P]>
      : GetScalarType<T[P], AggregateConsultas[P]>
  }




  export type consultasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: consultasWhereInput
    orderBy?: consultasOrderByWithAggregationInput | consultasOrderByWithAggregationInput[]
    by: ConsultasScalarFieldEnum[] | ConsultasScalarFieldEnum
    having?: consultasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsultasCountAggregateInputType | true
    _avg?: ConsultasAvgAggregateInputType
    _sum?: ConsultasSumAggregateInputType
    _min?: ConsultasMinAggregateInputType
    _max?: ConsultasMaxAggregateInputType
  }

  export type ConsultasGroupByOutputType = {
    id: number
    paciente_id: number | null
    fecha_consulta: Date
    hora_consulta: Date
    motivo: string
    diagnostico: string | null
    tratamiento: string | null
    imagenes: string[]
    notas: string | null
    _count: ConsultasCountAggregateOutputType | null
    _avg: ConsultasAvgAggregateOutputType | null
    _sum: ConsultasSumAggregateOutputType | null
    _min: ConsultasMinAggregateOutputType | null
    _max: ConsultasMaxAggregateOutputType | null
  }

  type GetConsultasGroupByPayload<T extends consultasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsultasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsultasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsultasGroupByOutputType[P]>
            : GetScalarType<T[P], ConsultasGroupByOutputType[P]>
        }
      >
    >


  export type consultasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paciente_id?: boolean
    fecha_consulta?: boolean
    hora_consulta?: boolean
    motivo?: boolean
    diagnostico?: boolean
    tratamiento?: boolean
    imagenes?: boolean
    notas?: boolean
    pacientes?: boolean | consultas$pacientesArgs<ExtArgs>
  }, ExtArgs["result"]["consultas"]>

  export type consultasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paciente_id?: boolean
    fecha_consulta?: boolean
    hora_consulta?: boolean
    motivo?: boolean
    diagnostico?: boolean
    tratamiento?: boolean
    imagenes?: boolean
    notas?: boolean
    pacientes?: boolean | consultas$pacientesArgs<ExtArgs>
  }, ExtArgs["result"]["consultas"]>

  export type consultasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paciente_id?: boolean
    fecha_consulta?: boolean
    hora_consulta?: boolean
    motivo?: boolean
    diagnostico?: boolean
    tratamiento?: boolean
    imagenes?: boolean
    notas?: boolean
    pacientes?: boolean | consultas$pacientesArgs<ExtArgs>
  }, ExtArgs["result"]["consultas"]>

  export type consultasSelectScalar = {
    id?: boolean
    paciente_id?: boolean
    fecha_consulta?: boolean
    hora_consulta?: boolean
    motivo?: boolean
    diagnostico?: boolean
    tratamiento?: boolean
    imagenes?: boolean
    notas?: boolean
  }

  export type consultasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "paciente_id" | "fecha_consulta" | "hora_consulta" | "motivo" | "diagnostico" | "tratamiento" | "imagenes" | "notas", ExtArgs["result"]["consultas"]>
  export type consultasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | consultas$pacientesArgs<ExtArgs>
  }
  export type consultasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | consultas$pacientesArgs<ExtArgs>
  }
  export type consultasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | consultas$pacientesArgs<ExtArgs>
  }

  export type $consultasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "consultas"
    objects: {
      pacientes: Prisma.$pacientesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      paciente_id: number | null
      fecha_consulta: Date
      hora_consulta: Date
      motivo: string
      diagnostico: string | null
      tratamiento: string | null
      imagenes: string[]
      notas: string | null
    }, ExtArgs["result"]["consultas"]>
    composites: {}
  }

  type consultasGetPayload<S extends boolean | null | undefined | consultasDefaultArgs> = $Result.GetResult<Prisma.$consultasPayload, S>

  type consultasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<consultasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsultasCountAggregateInputType | true
    }

  export interface consultasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['consultas'], meta: { name: 'consultas' } }
    /**
     * Find zero or one Consultas that matches the filter.
     * @param {consultasFindUniqueArgs} args - Arguments to find a Consultas
     * @example
     * // Get one Consultas
     * const consultas = await prisma.consultas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends consultasFindUniqueArgs>(args: SelectSubset<T, consultasFindUniqueArgs<ExtArgs>>): Prisma__consultasClient<$Result.GetResult<Prisma.$consultasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Consultas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {consultasFindUniqueOrThrowArgs} args - Arguments to find a Consultas
     * @example
     * // Get one Consultas
     * const consultas = await prisma.consultas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends consultasFindUniqueOrThrowArgs>(args: SelectSubset<T, consultasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__consultasClient<$Result.GetResult<Prisma.$consultasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consultas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {consultasFindFirstArgs} args - Arguments to find a Consultas
     * @example
     * // Get one Consultas
     * const consultas = await prisma.consultas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends consultasFindFirstArgs>(args?: SelectSubset<T, consultasFindFirstArgs<ExtArgs>>): Prisma__consultasClient<$Result.GetResult<Prisma.$consultasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consultas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {consultasFindFirstOrThrowArgs} args - Arguments to find a Consultas
     * @example
     * // Get one Consultas
     * const consultas = await prisma.consultas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends consultasFindFirstOrThrowArgs>(args?: SelectSubset<T, consultasFindFirstOrThrowArgs<ExtArgs>>): Prisma__consultasClient<$Result.GetResult<Prisma.$consultasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Consultas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {consultasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Consultas
     * const consultas = await prisma.consultas.findMany()
     * 
     * // Get first 10 Consultas
     * const consultas = await prisma.consultas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consultasWithIdOnly = await prisma.consultas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends consultasFindManyArgs>(args?: SelectSubset<T, consultasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$consultasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Consultas.
     * @param {consultasCreateArgs} args - Arguments to create a Consultas.
     * @example
     * // Create one Consultas
     * const Consultas = await prisma.consultas.create({
     *   data: {
     *     // ... data to create a Consultas
     *   }
     * })
     * 
     */
    create<T extends consultasCreateArgs>(args: SelectSubset<T, consultasCreateArgs<ExtArgs>>): Prisma__consultasClient<$Result.GetResult<Prisma.$consultasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Consultas.
     * @param {consultasCreateManyArgs} args - Arguments to create many Consultas.
     * @example
     * // Create many Consultas
     * const consultas = await prisma.consultas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends consultasCreateManyArgs>(args?: SelectSubset<T, consultasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Consultas and returns the data saved in the database.
     * @param {consultasCreateManyAndReturnArgs} args - Arguments to create many Consultas.
     * @example
     * // Create many Consultas
     * const consultas = await prisma.consultas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Consultas and only return the `id`
     * const consultasWithIdOnly = await prisma.consultas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends consultasCreateManyAndReturnArgs>(args?: SelectSubset<T, consultasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$consultasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Consultas.
     * @param {consultasDeleteArgs} args - Arguments to delete one Consultas.
     * @example
     * // Delete one Consultas
     * const Consultas = await prisma.consultas.delete({
     *   where: {
     *     // ... filter to delete one Consultas
     *   }
     * })
     * 
     */
    delete<T extends consultasDeleteArgs>(args: SelectSubset<T, consultasDeleteArgs<ExtArgs>>): Prisma__consultasClient<$Result.GetResult<Prisma.$consultasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Consultas.
     * @param {consultasUpdateArgs} args - Arguments to update one Consultas.
     * @example
     * // Update one Consultas
     * const consultas = await prisma.consultas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends consultasUpdateArgs>(args: SelectSubset<T, consultasUpdateArgs<ExtArgs>>): Prisma__consultasClient<$Result.GetResult<Prisma.$consultasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Consultas.
     * @param {consultasDeleteManyArgs} args - Arguments to filter Consultas to delete.
     * @example
     * // Delete a few Consultas
     * const { count } = await prisma.consultas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends consultasDeleteManyArgs>(args?: SelectSubset<T, consultasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consultas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {consultasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Consultas
     * const consultas = await prisma.consultas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends consultasUpdateManyArgs>(args: SelectSubset<T, consultasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consultas and returns the data updated in the database.
     * @param {consultasUpdateManyAndReturnArgs} args - Arguments to update many Consultas.
     * @example
     * // Update many Consultas
     * const consultas = await prisma.consultas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Consultas and only return the `id`
     * const consultasWithIdOnly = await prisma.consultas.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends consultasUpdateManyAndReturnArgs>(args: SelectSubset<T, consultasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$consultasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Consultas.
     * @param {consultasUpsertArgs} args - Arguments to update or create a Consultas.
     * @example
     * // Update or create a Consultas
     * const consultas = await prisma.consultas.upsert({
     *   create: {
     *     // ... data to create a Consultas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Consultas we want to update
     *   }
     * })
     */
    upsert<T extends consultasUpsertArgs>(args: SelectSubset<T, consultasUpsertArgs<ExtArgs>>): Prisma__consultasClient<$Result.GetResult<Prisma.$consultasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Consultas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {consultasCountArgs} args - Arguments to filter Consultas to count.
     * @example
     * // Count the number of Consultas
     * const count = await prisma.consultas.count({
     *   where: {
     *     // ... the filter for the Consultas we want to count
     *   }
     * })
    **/
    count<T extends consultasCountArgs>(
      args?: Subset<T, consultasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsultasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Consultas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConsultasAggregateArgs>(args: Subset<T, ConsultasAggregateArgs>): Prisma.PrismaPromise<GetConsultasAggregateType<T>>

    /**
     * Group by Consultas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {consultasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends consultasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: consultasGroupByArgs['orderBy'] }
        : { orderBy?: consultasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, consultasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the consultas model
   */
  readonly fields: consultasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for consultas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__consultasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pacientes<T extends consultas$pacientesArgs<ExtArgs> = {}>(args?: Subset<T, consultas$pacientesArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the consultas model
   */
  interface consultasFieldRefs {
    readonly id: FieldRef<"consultas", 'Int'>
    readonly paciente_id: FieldRef<"consultas", 'Int'>
    readonly fecha_consulta: FieldRef<"consultas", 'DateTime'>
    readonly hora_consulta: FieldRef<"consultas", 'DateTime'>
    readonly motivo: FieldRef<"consultas", 'String'>
    readonly diagnostico: FieldRef<"consultas", 'String'>
    readonly tratamiento: FieldRef<"consultas", 'String'>
    readonly imagenes: FieldRef<"consultas", 'String[]'>
    readonly notas: FieldRef<"consultas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * consultas findUnique
   */
  export type consultasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consultas
     */
    select?: consultasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the consultas
     */
    omit?: consultasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consultasInclude<ExtArgs> | null
    /**
     * Filter, which consultas to fetch.
     */
    where: consultasWhereUniqueInput
  }

  /**
   * consultas findUniqueOrThrow
   */
  export type consultasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consultas
     */
    select?: consultasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the consultas
     */
    omit?: consultasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consultasInclude<ExtArgs> | null
    /**
     * Filter, which consultas to fetch.
     */
    where: consultasWhereUniqueInput
  }

  /**
   * consultas findFirst
   */
  export type consultasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consultas
     */
    select?: consultasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the consultas
     */
    omit?: consultasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consultasInclude<ExtArgs> | null
    /**
     * Filter, which consultas to fetch.
     */
    where?: consultasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of consultas to fetch.
     */
    orderBy?: consultasOrderByWithRelationInput | consultasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for consultas.
     */
    cursor?: consultasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` consultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of consultas.
     */
    distinct?: ConsultasScalarFieldEnum | ConsultasScalarFieldEnum[]
  }

  /**
   * consultas findFirstOrThrow
   */
  export type consultasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consultas
     */
    select?: consultasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the consultas
     */
    omit?: consultasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consultasInclude<ExtArgs> | null
    /**
     * Filter, which consultas to fetch.
     */
    where?: consultasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of consultas to fetch.
     */
    orderBy?: consultasOrderByWithRelationInput | consultasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for consultas.
     */
    cursor?: consultasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` consultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of consultas.
     */
    distinct?: ConsultasScalarFieldEnum | ConsultasScalarFieldEnum[]
  }

  /**
   * consultas findMany
   */
  export type consultasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consultas
     */
    select?: consultasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the consultas
     */
    omit?: consultasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consultasInclude<ExtArgs> | null
    /**
     * Filter, which consultas to fetch.
     */
    where?: consultasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of consultas to fetch.
     */
    orderBy?: consultasOrderByWithRelationInput | consultasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing consultas.
     */
    cursor?: consultasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` consultas.
     */
    skip?: number
    distinct?: ConsultasScalarFieldEnum | ConsultasScalarFieldEnum[]
  }

  /**
   * consultas create
   */
  export type consultasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consultas
     */
    select?: consultasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the consultas
     */
    omit?: consultasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consultasInclude<ExtArgs> | null
    /**
     * The data needed to create a consultas.
     */
    data: XOR<consultasCreateInput, consultasUncheckedCreateInput>
  }

  /**
   * consultas createMany
   */
  export type consultasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many consultas.
     */
    data: consultasCreateManyInput | consultasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * consultas createManyAndReturn
   */
  export type consultasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consultas
     */
    select?: consultasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the consultas
     */
    omit?: consultasOmit<ExtArgs> | null
    /**
     * The data used to create many consultas.
     */
    data: consultasCreateManyInput | consultasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consultasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * consultas update
   */
  export type consultasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consultas
     */
    select?: consultasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the consultas
     */
    omit?: consultasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consultasInclude<ExtArgs> | null
    /**
     * The data needed to update a consultas.
     */
    data: XOR<consultasUpdateInput, consultasUncheckedUpdateInput>
    /**
     * Choose, which consultas to update.
     */
    where: consultasWhereUniqueInput
  }

  /**
   * consultas updateMany
   */
  export type consultasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update consultas.
     */
    data: XOR<consultasUpdateManyMutationInput, consultasUncheckedUpdateManyInput>
    /**
     * Filter which consultas to update
     */
    where?: consultasWhereInput
    /**
     * Limit how many consultas to update.
     */
    limit?: number
  }

  /**
   * consultas updateManyAndReturn
   */
  export type consultasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consultas
     */
    select?: consultasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the consultas
     */
    omit?: consultasOmit<ExtArgs> | null
    /**
     * The data used to update consultas.
     */
    data: XOR<consultasUpdateManyMutationInput, consultasUncheckedUpdateManyInput>
    /**
     * Filter which consultas to update
     */
    where?: consultasWhereInput
    /**
     * Limit how many consultas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consultasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * consultas upsert
   */
  export type consultasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consultas
     */
    select?: consultasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the consultas
     */
    omit?: consultasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consultasInclude<ExtArgs> | null
    /**
     * The filter to search for the consultas to update in case it exists.
     */
    where: consultasWhereUniqueInput
    /**
     * In case the consultas found by the `where` argument doesn't exist, create a new consultas with this data.
     */
    create: XOR<consultasCreateInput, consultasUncheckedCreateInput>
    /**
     * In case the consultas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<consultasUpdateInput, consultasUncheckedUpdateInput>
  }

  /**
   * consultas delete
   */
  export type consultasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consultas
     */
    select?: consultasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the consultas
     */
    omit?: consultasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consultasInclude<ExtArgs> | null
    /**
     * Filter which consultas to delete.
     */
    where: consultasWhereUniqueInput
  }

  /**
   * consultas deleteMany
   */
  export type consultasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which consultas to delete
     */
    where?: consultasWhereInput
    /**
     * Limit how many consultas to delete.
     */
    limit?: number
  }

  /**
   * consultas.pacientes
   */
  export type consultas$pacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    where?: pacientesWhereInput
  }

  /**
   * consultas without action
   */
  export type consultasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consultas
     */
    select?: consultasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the consultas
     */
    omit?: consultasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consultasInclude<ExtArgs> | null
  }


  /**
   * Model contactos_emergencia
   */

  export type AggregateContactos_emergencia = {
    _count: Contactos_emergenciaCountAggregateOutputType | null
    _avg: Contactos_emergenciaAvgAggregateOutputType | null
    _sum: Contactos_emergenciaSumAggregateOutputType | null
    _min: Contactos_emergenciaMinAggregateOutputType | null
    _max: Contactos_emergenciaMaxAggregateOutputType | null
  }

  export type Contactos_emergenciaAvgAggregateOutputType = {
    id: number | null
    paciente_id: number | null
  }

  export type Contactos_emergenciaSumAggregateOutputType = {
    id: number | null
    paciente_id: number | null
  }

  export type Contactos_emergenciaMinAggregateOutputType = {
    id: number | null
    paciente_id: number | null
    nombre: string | null
    relacion: string | null
    telefono: string | null
  }

  export type Contactos_emergenciaMaxAggregateOutputType = {
    id: number | null
    paciente_id: number | null
    nombre: string | null
    relacion: string | null
    telefono: string | null
  }

  export type Contactos_emergenciaCountAggregateOutputType = {
    id: number
    paciente_id: number
    nombre: number
    relacion: number
    telefono: number
    _all: number
  }


  export type Contactos_emergenciaAvgAggregateInputType = {
    id?: true
    paciente_id?: true
  }

  export type Contactos_emergenciaSumAggregateInputType = {
    id?: true
    paciente_id?: true
  }

  export type Contactos_emergenciaMinAggregateInputType = {
    id?: true
    paciente_id?: true
    nombre?: true
    relacion?: true
    telefono?: true
  }

  export type Contactos_emergenciaMaxAggregateInputType = {
    id?: true
    paciente_id?: true
    nombre?: true
    relacion?: true
    telefono?: true
  }

  export type Contactos_emergenciaCountAggregateInputType = {
    id?: true
    paciente_id?: true
    nombre?: true
    relacion?: true
    telefono?: true
    _all?: true
  }

  export type Contactos_emergenciaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contactos_emergencia to aggregate.
     */
    where?: contactos_emergenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contactos_emergencias to fetch.
     */
    orderBy?: contactos_emergenciaOrderByWithRelationInput | contactos_emergenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: contactos_emergenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contactos_emergencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contactos_emergencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned contactos_emergencias
    **/
    _count?: true | Contactos_emergenciaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Contactos_emergenciaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Contactos_emergenciaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Contactos_emergenciaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Contactos_emergenciaMaxAggregateInputType
  }

  export type GetContactos_emergenciaAggregateType<T extends Contactos_emergenciaAggregateArgs> = {
        [P in keyof T & keyof AggregateContactos_emergencia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactos_emergencia[P]>
      : GetScalarType<T[P], AggregateContactos_emergencia[P]>
  }




  export type contactos_emergenciaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contactos_emergenciaWhereInput
    orderBy?: contactos_emergenciaOrderByWithAggregationInput | contactos_emergenciaOrderByWithAggregationInput[]
    by: Contactos_emergenciaScalarFieldEnum[] | Contactos_emergenciaScalarFieldEnum
    having?: contactos_emergenciaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Contactos_emergenciaCountAggregateInputType | true
    _avg?: Contactos_emergenciaAvgAggregateInputType
    _sum?: Contactos_emergenciaSumAggregateInputType
    _min?: Contactos_emergenciaMinAggregateInputType
    _max?: Contactos_emergenciaMaxAggregateInputType
  }

  export type Contactos_emergenciaGroupByOutputType = {
    id: number
    paciente_id: number | null
    nombre: string
    relacion: string | null
    telefono: string
    _count: Contactos_emergenciaCountAggregateOutputType | null
    _avg: Contactos_emergenciaAvgAggregateOutputType | null
    _sum: Contactos_emergenciaSumAggregateOutputType | null
    _min: Contactos_emergenciaMinAggregateOutputType | null
    _max: Contactos_emergenciaMaxAggregateOutputType | null
  }

  type GetContactos_emergenciaGroupByPayload<T extends contactos_emergenciaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Contactos_emergenciaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Contactos_emergenciaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Contactos_emergenciaGroupByOutputType[P]>
            : GetScalarType<T[P], Contactos_emergenciaGroupByOutputType[P]>
        }
      >
    >


  export type contactos_emergenciaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paciente_id?: boolean
    nombre?: boolean
    relacion?: boolean
    telefono?: boolean
    pacientes?: boolean | contactos_emergencia$pacientesArgs<ExtArgs>
  }, ExtArgs["result"]["contactos_emergencia"]>

  export type contactos_emergenciaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paciente_id?: boolean
    nombre?: boolean
    relacion?: boolean
    telefono?: boolean
    pacientes?: boolean | contactos_emergencia$pacientesArgs<ExtArgs>
  }, ExtArgs["result"]["contactos_emergencia"]>

  export type contactos_emergenciaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paciente_id?: boolean
    nombre?: boolean
    relacion?: boolean
    telefono?: boolean
    pacientes?: boolean | contactos_emergencia$pacientesArgs<ExtArgs>
  }, ExtArgs["result"]["contactos_emergencia"]>

  export type contactos_emergenciaSelectScalar = {
    id?: boolean
    paciente_id?: boolean
    nombre?: boolean
    relacion?: boolean
    telefono?: boolean
  }

  export type contactos_emergenciaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "paciente_id" | "nombre" | "relacion" | "telefono", ExtArgs["result"]["contactos_emergencia"]>
  export type contactos_emergenciaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | contactos_emergencia$pacientesArgs<ExtArgs>
  }
  export type contactos_emergenciaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | contactos_emergencia$pacientesArgs<ExtArgs>
  }
  export type contactos_emergenciaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | contactos_emergencia$pacientesArgs<ExtArgs>
  }

  export type $contactos_emergenciaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "contactos_emergencia"
    objects: {
      pacientes: Prisma.$pacientesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      paciente_id: number | null
      nombre: string
      relacion: string | null
      telefono: string
    }, ExtArgs["result"]["contactos_emergencia"]>
    composites: {}
  }

  type contactos_emergenciaGetPayload<S extends boolean | null | undefined | contactos_emergenciaDefaultArgs> = $Result.GetResult<Prisma.$contactos_emergenciaPayload, S>

  type contactos_emergenciaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<contactos_emergenciaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Contactos_emergenciaCountAggregateInputType | true
    }

  export interface contactos_emergenciaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['contactos_emergencia'], meta: { name: 'contactos_emergencia' } }
    /**
     * Find zero or one Contactos_emergencia that matches the filter.
     * @param {contactos_emergenciaFindUniqueArgs} args - Arguments to find a Contactos_emergencia
     * @example
     * // Get one Contactos_emergencia
     * const contactos_emergencia = await prisma.contactos_emergencia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends contactos_emergenciaFindUniqueArgs>(args: SelectSubset<T, contactos_emergenciaFindUniqueArgs<ExtArgs>>): Prisma__contactos_emergenciaClient<$Result.GetResult<Prisma.$contactos_emergenciaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contactos_emergencia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {contactos_emergenciaFindUniqueOrThrowArgs} args - Arguments to find a Contactos_emergencia
     * @example
     * // Get one Contactos_emergencia
     * const contactos_emergencia = await prisma.contactos_emergencia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends contactos_emergenciaFindUniqueOrThrowArgs>(args: SelectSubset<T, contactos_emergenciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__contactos_emergenciaClient<$Result.GetResult<Prisma.$contactos_emergenciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contactos_emergencia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactos_emergenciaFindFirstArgs} args - Arguments to find a Contactos_emergencia
     * @example
     * // Get one Contactos_emergencia
     * const contactos_emergencia = await prisma.contactos_emergencia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends contactos_emergenciaFindFirstArgs>(args?: SelectSubset<T, contactos_emergenciaFindFirstArgs<ExtArgs>>): Prisma__contactos_emergenciaClient<$Result.GetResult<Prisma.$contactos_emergenciaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contactos_emergencia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactos_emergenciaFindFirstOrThrowArgs} args - Arguments to find a Contactos_emergencia
     * @example
     * // Get one Contactos_emergencia
     * const contactos_emergencia = await prisma.contactos_emergencia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends contactos_emergenciaFindFirstOrThrowArgs>(args?: SelectSubset<T, contactos_emergenciaFindFirstOrThrowArgs<ExtArgs>>): Prisma__contactos_emergenciaClient<$Result.GetResult<Prisma.$contactos_emergenciaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contactos_emergencias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactos_emergenciaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contactos_emergencias
     * const contactos_emergencias = await prisma.contactos_emergencia.findMany()
     * 
     * // Get first 10 Contactos_emergencias
     * const contactos_emergencias = await prisma.contactos_emergencia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactos_emergenciaWithIdOnly = await prisma.contactos_emergencia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends contactos_emergenciaFindManyArgs>(args?: SelectSubset<T, contactos_emergenciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contactos_emergenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contactos_emergencia.
     * @param {contactos_emergenciaCreateArgs} args - Arguments to create a Contactos_emergencia.
     * @example
     * // Create one Contactos_emergencia
     * const Contactos_emergencia = await prisma.contactos_emergencia.create({
     *   data: {
     *     // ... data to create a Contactos_emergencia
     *   }
     * })
     * 
     */
    create<T extends contactos_emergenciaCreateArgs>(args: SelectSubset<T, contactos_emergenciaCreateArgs<ExtArgs>>): Prisma__contactos_emergenciaClient<$Result.GetResult<Prisma.$contactos_emergenciaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contactos_emergencias.
     * @param {contactos_emergenciaCreateManyArgs} args - Arguments to create many Contactos_emergencias.
     * @example
     * // Create many Contactos_emergencias
     * const contactos_emergencia = await prisma.contactos_emergencia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends contactos_emergenciaCreateManyArgs>(args?: SelectSubset<T, contactos_emergenciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contactos_emergencias and returns the data saved in the database.
     * @param {contactos_emergenciaCreateManyAndReturnArgs} args - Arguments to create many Contactos_emergencias.
     * @example
     * // Create many Contactos_emergencias
     * const contactos_emergencia = await prisma.contactos_emergencia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contactos_emergencias and only return the `id`
     * const contactos_emergenciaWithIdOnly = await prisma.contactos_emergencia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends contactos_emergenciaCreateManyAndReturnArgs>(args?: SelectSubset<T, contactos_emergenciaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contactos_emergenciaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contactos_emergencia.
     * @param {contactos_emergenciaDeleteArgs} args - Arguments to delete one Contactos_emergencia.
     * @example
     * // Delete one Contactos_emergencia
     * const Contactos_emergencia = await prisma.contactos_emergencia.delete({
     *   where: {
     *     // ... filter to delete one Contactos_emergencia
     *   }
     * })
     * 
     */
    delete<T extends contactos_emergenciaDeleteArgs>(args: SelectSubset<T, contactos_emergenciaDeleteArgs<ExtArgs>>): Prisma__contactos_emergenciaClient<$Result.GetResult<Prisma.$contactos_emergenciaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contactos_emergencia.
     * @param {contactos_emergenciaUpdateArgs} args - Arguments to update one Contactos_emergencia.
     * @example
     * // Update one Contactos_emergencia
     * const contactos_emergencia = await prisma.contactos_emergencia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends contactos_emergenciaUpdateArgs>(args: SelectSubset<T, contactos_emergenciaUpdateArgs<ExtArgs>>): Prisma__contactos_emergenciaClient<$Result.GetResult<Prisma.$contactos_emergenciaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contactos_emergencias.
     * @param {contactos_emergenciaDeleteManyArgs} args - Arguments to filter Contactos_emergencias to delete.
     * @example
     * // Delete a few Contactos_emergencias
     * const { count } = await prisma.contactos_emergencia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends contactos_emergenciaDeleteManyArgs>(args?: SelectSubset<T, contactos_emergenciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contactos_emergencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactos_emergenciaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contactos_emergencias
     * const contactos_emergencia = await prisma.contactos_emergencia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends contactos_emergenciaUpdateManyArgs>(args: SelectSubset<T, contactos_emergenciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contactos_emergencias and returns the data updated in the database.
     * @param {contactos_emergenciaUpdateManyAndReturnArgs} args - Arguments to update many Contactos_emergencias.
     * @example
     * // Update many Contactos_emergencias
     * const contactos_emergencia = await prisma.contactos_emergencia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contactos_emergencias and only return the `id`
     * const contactos_emergenciaWithIdOnly = await prisma.contactos_emergencia.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends contactos_emergenciaUpdateManyAndReturnArgs>(args: SelectSubset<T, contactos_emergenciaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contactos_emergenciaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contactos_emergencia.
     * @param {contactos_emergenciaUpsertArgs} args - Arguments to update or create a Contactos_emergencia.
     * @example
     * // Update or create a Contactos_emergencia
     * const contactos_emergencia = await prisma.contactos_emergencia.upsert({
     *   create: {
     *     // ... data to create a Contactos_emergencia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contactos_emergencia we want to update
     *   }
     * })
     */
    upsert<T extends contactos_emergenciaUpsertArgs>(args: SelectSubset<T, contactos_emergenciaUpsertArgs<ExtArgs>>): Prisma__contactos_emergenciaClient<$Result.GetResult<Prisma.$contactos_emergenciaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contactos_emergencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactos_emergenciaCountArgs} args - Arguments to filter Contactos_emergencias to count.
     * @example
     * // Count the number of Contactos_emergencias
     * const count = await prisma.contactos_emergencia.count({
     *   where: {
     *     // ... the filter for the Contactos_emergencias we want to count
     *   }
     * })
    **/
    count<T extends contactos_emergenciaCountArgs>(
      args?: Subset<T, contactos_emergenciaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Contactos_emergenciaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contactos_emergencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Contactos_emergenciaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Contactos_emergenciaAggregateArgs>(args: Subset<T, Contactos_emergenciaAggregateArgs>): Prisma.PrismaPromise<GetContactos_emergenciaAggregateType<T>>

    /**
     * Group by Contactos_emergencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactos_emergenciaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends contactos_emergenciaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: contactos_emergenciaGroupByArgs['orderBy'] }
        : { orderBy?: contactos_emergenciaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, contactos_emergenciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactos_emergenciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the contactos_emergencia model
   */
  readonly fields: contactos_emergenciaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for contactos_emergencia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__contactos_emergenciaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pacientes<T extends contactos_emergencia$pacientesArgs<ExtArgs> = {}>(args?: Subset<T, contactos_emergencia$pacientesArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the contactos_emergencia model
   */
  interface contactos_emergenciaFieldRefs {
    readonly id: FieldRef<"contactos_emergencia", 'Int'>
    readonly paciente_id: FieldRef<"contactos_emergencia", 'Int'>
    readonly nombre: FieldRef<"contactos_emergencia", 'String'>
    readonly relacion: FieldRef<"contactos_emergencia", 'String'>
    readonly telefono: FieldRef<"contactos_emergencia", 'String'>
  }
    

  // Custom InputTypes
  /**
   * contactos_emergencia findUnique
   */
  export type contactos_emergenciaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactos_emergencia
     */
    select?: contactos_emergenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactos_emergencia
     */
    omit?: contactos_emergenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactos_emergenciaInclude<ExtArgs> | null
    /**
     * Filter, which contactos_emergencia to fetch.
     */
    where: contactos_emergenciaWhereUniqueInput
  }

  /**
   * contactos_emergencia findUniqueOrThrow
   */
  export type contactos_emergenciaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactos_emergencia
     */
    select?: contactos_emergenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactos_emergencia
     */
    omit?: contactos_emergenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactos_emergenciaInclude<ExtArgs> | null
    /**
     * Filter, which contactos_emergencia to fetch.
     */
    where: contactos_emergenciaWhereUniqueInput
  }

  /**
   * contactos_emergencia findFirst
   */
  export type contactos_emergenciaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactos_emergencia
     */
    select?: contactos_emergenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactos_emergencia
     */
    omit?: contactos_emergenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactos_emergenciaInclude<ExtArgs> | null
    /**
     * Filter, which contactos_emergencia to fetch.
     */
    where?: contactos_emergenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contactos_emergencias to fetch.
     */
    orderBy?: contactos_emergenciaOrderByWithRelationInput | contactos_emergenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contactos_emergencias.
     */
    cursor?: contactos_emergenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contactos_emergencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contactos_emergencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contactos_emergencias.
     */
    distinct?: Contactos_emergenciaScalarFieldEnum | Contactos_emergenciaScalarFieldEnum[]
  }

  /**
   * contactos_emergencia findFirstOrThrow
   */
  export type contactos_emergenciaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactos_emergencia
     */
    select?: contactos_emergenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactos_emergencia
     */
    omit?: contactos_emergenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactos_emergenciaInclude<ExtArgs> | null
    /**
     * Filter, which contactos_emergencia to fetch.
     */
    where?: contactos_emergenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contactos_emergencias to fetch.
     */
    orderBy?: contactos_emergenciaOrderByWithRelationInput | contactos_emergenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contactos_emergencias.
     */
    cursor?: contactos_emergenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contactos_emergencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contactos_emergencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contactos_emergencias.
     */
    distinct?: Contactos_emergenciaScalarFieldEnum | Contactos_emergenciaScalarFieldEnum[]
  }

  /**
   * contactos_emergencia findMany
   */
  export type contactos_emergenciaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactos_emergencia
     */
    select?: contactos_emergenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactos_emergencia
     */
    omit?: contactos_emergenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactos_emergenciaInclude<ExtArgs> | null
    /**
     * Filter, which contactos_emergencias to fetch.
     */
    where?: contactos_emergenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contactos_emergencias to fetch.
     */
    orderBy?: contactos_emergenciaOrderByWithRelationInput | contactos_emergenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing contactos_emergencias.
     */
    cursor?: contactos_emergenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contactos_emergencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contactos_emergencias.
     */
    skip?: number
    distinct?: Contactos_emergenciaScalarFieldEnum | Contactos_emergenciaScalarFieldEnum[]
  }

  /**
   * contactos_emergencia create
   */
  export type contactos_emergenciaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactos_emergencia
     */
    select?: contactos_emergenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactos_emergencia
     */
    omit?: contactos_emergenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactos_emergenciaInclude<ExtArgs> | null
    /**
     * The data needed to create a contactos_emergencia.
     */
    data: XOR<contactos_emergenciaCreateInput, contactos_emergenciaUncheckedCreateInput>
  }

  /**
   * contactos_emergencia createMany
   */
  export type contactos_emergenciaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many contactos_emergencias.
     */
    data: contactos_emergenciaCreateManyInput | contactos_emergenciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * contactos_emergencia createManyAndReturn
   */
  export type contactos_emergenciaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactos_emergencia
     */
    select?: contactos_emergenciaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the contactos_emergencia
     */
    omit?: contactos_emergenciaOmit<ExtArgs> | null
    /**
     * The data used to create many contactos_emergencias.
     */
    data: contactos_emergenciaCreateManyInput | contactos_emergenciaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactos_emergenciaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * contactos_emergencia update
   */
  export type contactos_emergenciaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactos_emergencia
     */
    select?: contactos_emergenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactos_emergencia
     */
    omit?: contactos_emergenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactos_emergenciaInclude<ExtArgs> | null
    /**
     * The data needed to update a contactos_emergencia.
     */
    data: XOR<contactos_emergenciaUpdateInput, contactos_emergenciaUncheckedUpdateInput>
    /**
     * Choose, which contactos_emergencia to update.
     */
    where: contactos_emergenciaWhereUniqueInput
  }

  /**
   * contactos_emergencia updateMany
   */
  export type contactos_emergenciaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update contactos_emergencias.
     */
    data: XOR<contactos_emergenciaUpdateManyMutationInput, contactos_emergenciaUncheckedUpdateManyInput>
    /**
     * Filter which contactos_emergencias to update
     */
    where?: contactos_emergenciaWhereInput
    /**
     * Limit how many contactos_emergencias to update.
     */
    limit?: number
  }

  /**
   * contactos_emergencia updateManyAndReturn
   */
  export type contactos_emergenciaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactos_emergencia
     */
    select?: contactos_emergenciaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the contactos_emergencia
     */
    omit?: contactos_emergenciaOmit<ExtArgs> | null
    /**
     * The data used to update contactos_emergencias.
     */
    data: XOR<contactos_emergenciaUpdateManyMutationInput, contactos_emergenciaUncheckedUpdateManyInput>
    /**
     * Filter which contactos_emergencias to update
     */
    where?: contactos_emergenciaWhereInput
    /**
     * Limit how many contactos_emergencias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactos_emergenciaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * contactos_emergencia upsert
   */
  export type contactos_emergenciaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactos_emergencia
     */
    select?: contactos_emergenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactos_emergencia
     */
    omit?: contactos_emergenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactos_emergenciaInclude<ExtArgs> | null
    /**
     * The filter to search for the contactos_emergencia to update in case it exists.
     */
    where: contactos_emergenciaWhereUniqueInput
    /**
     * In case the contactos_emergencia found by the `where` argument doesn't exist, create a new contactos_emergencia with this data.
     */
    create: XOR<contactos_emergenciaCreateInput, contactos_emergenciaUncheckedCreateInput>
    /**
     * In case the contactos_emergencia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<contactos_emergenciaUpdateInput, contactos_emergenciaUncheckedUpdateInput>
  }

  /**
   * contactos_emergencia delete
   */
  export type contactos_emergenciaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactos_emergencia
     */
    select?: contactos_emergenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactos_emergencia
     */
    omit?: contactos_emergenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactos_emergenciaInclude<ExtArgs> | null
    /**
     * Filter which contactos_emergencia to delete.
     */
    where: contactos_emergenciaWhereUniqueInput
  }

  /**
   * contactos_emergencia deleteMany
   */
  export type contactos_emergenciaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contactos_emergencias to delete
     */
    where?: contactos_emergenciaWhereInput
    /**
     * Limit how many contactos_emergencias to delete.
     */
    limit?: number
  }

  /**
   * contactos_emergencia.pacientes
   */
  export type contactos_emergencia$pacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    where?: pacientesWhereInput
  }

  /**
   * contactos_emergencia without action
   */
  export type contactos_emergenciaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactos_emergencia
     */
    select?: contactos_emergenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactos_emergencia
     */
    omit?: contactos_emergenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactos_emergenciaInclude<ExtArgs> | null
  }


  /**
   * Model enfermedades
   */

  export type AggregateEnfermedades = {
    _count: EnfermedadesCountAggregateOutputType | null
    _avg: EnfermedadesAvgAggregateOutputType | null
    _sum: EnfermedadesSumAggregateOutputType | null
    _min: EnfermedadesMinAggregateOutputType | null
    _max: EnfermedadesMaxAggregateOutputType | null
  }

  export type EnfermedadesAvgAggregateOutputType = {
    id: number | null
    paciente_id: number | null
  }

  export type EnfermedadesSumAggregateOutputType = {
    id: number | null
    paciente_id: number | null
  }

  export type EnfermedadesMinAggregateOutputType = {
    id: number | null
    paciente_id: number | null
    enfermedad: string | null
  }

  export type EnfermedadesMaxAggregateOutputType = {
    id: number | null
    paciente_id: number | null
    enfermedad: string | null
  }

  export type EnfermedadesCountAggregateOutputType = {
    id: number
    paciente_id: number
    enfermedad: number
    _all: number
  }


  export type EnfermedadesAvgAggregateInputType = {
    id?: true
    paciente_id?: true
  }

  export type EnfermedadesSumAggregateInputType = {
    id?: true
    paciente_id?: true
  }

  export type EnfermedadesMinAggregateInputType = {
    id?: true
    paciente_id?: true
    enfermedad?: true
  }

  export type EnfermedadesMaxAggregateInputType = {
    id?: true
    paciente_id?: true
    enfermedad?: true
  }

  export type EnfermedadesCountAggregateInputType = {
    id?: true
    paciente_id?: true
    enfermedad?: true
    _all?: true
  }

  export type EnfermedadesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enfermedades to aggregate.
     */
    where?: enfermedadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enfermedades to fetch.
     */
    orderBy?: enfermedadesOrderByWithRelationInput | enfermedadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: enfermedadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enfermedades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enfermedades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned enfermedades
    **/
    _count?: true | EnfermedadesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnfermedadesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnfermedadesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnfermedadesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnfermedadesMaxAggregateInputType
  }

  export type GetEnfermedadesAggregateType<T extends EnfermedadesAggregateArgs> = {
        [P in keyof T & keyof AggregateEnfermedades]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnfermedades[P]>
      : GetScalarType<T[P], AggregateEnfermedades[P]>
  }




  export type enfermedadesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enfermedadesWhereInput
    orderBy?: enfermedadesOrderByWithAggregationInput | enfermedadesOrderByWithAggregationInput[]
    by: EnfermedadesScalarFieldEnum[] | EnfermedadesScalarFieldEnum
    having?: enfermedadesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnfermedadesCountAggregateInputType | true
    _avg?: EnfermedadesAvgAggregateInputType
    _sum?: EnfermedadesSumAggregateInputType
    _min?: EnfermedadesMinAggregateInputType
    _max?: EnfermedadesMaxAggregateInputType
  }

  export type EnfermedadesGroupByOutputType = {
    id: number
    paciente_id: number | null
    enfermedad: string
    _count: EnfermedadesCountAggregateOutputType | null
    _avg: EnfermedadesAvgAggregateOutputType | null
    _sum: EnfermedadesSumAggregateOutputType | null
    _min: EnfermedadesMinAggregateOutputType | null
    _max: EnfermedadesMaxAggregateOutputType | null
  }

  type GetEnfermedadesGroupByPayload<T extends enfermedadesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnfermedadesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnfermedadesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnfermedadesGroupByOutputType[P]>
            : GetScalarType<T[P], EnfermedadesGroupByOutputType[P]>
        }
      >
    >


  export type enfermedadesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paciente_id?: boolean
    enfermedad?: boolean
    pacientes?: boolean | enfermedades$pacientesArgs<ExtArgs>
  }, ExtArgs["result"]["enfermedades"]>

  export type enfermedadesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paciente_id?: boolean
    enfermedad?: boolean
    pacientes?: boolean | enfermedades$pacientesArgs<ExtArgs>
  }, ExtArgs["result"]["enfermedades"]>

  export type enfermedadesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paciente_id?: boolean
    enfermedad?: boolean
    pacientes?: boolean | enfermedades$pacientesArgs<ExtArgs>
  }, ExtArgs["result"]["enfermedades"]>

  export type enfermedadesSelectScalar = {
    id?: boolean
    paciente_id?: boolean
    enfermedad?: boolean
  }

  export type enfermedadesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "paciente_id" | "enfermedad", ExtArgs["result"]["enfermedades"]>
  export type enfermedadesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | enfermedades$pacientesArgs<ExtArgs>
  }
  export type enfermedadesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | enfermedades$pacientesArgs<ExtArgs>
  }
  export type enfermedadesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | enfermedades$pacientesArgs<ExtArgs>
  }

  export type $enfermedadesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "enfermedades"
    objects: {
      pacientes: Prisma.$pacientesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      paciente_id: number | null
      enfermedad: string
    }, ExtArgs["result"]["enfermedades"]>
    composites: {}
  }

  type enfermedadesGetPayload<S extends boolean | null | undefined | enfermedadesDefaultArgs> = $Result.GetResult<Prisma.$enfermedadesPayload, S>

  type enfermedadesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<enfermedadesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnfermedadesCountAggregateInputType | true
    }

  export interface enfermedadesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['enfermedades'], meta: { name: 'enfermedades' } }
    /**
     * Find zero or one Enfermedades that matches the filter.
     * @param {enfermedadesFindUniqueArgs} args - Arguments to find a Enfermedades
     * @example
     * // Get one Enfermedades
     * const enfermedades = await prisma.enfermedades.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends enfermedadesFindUniqueArgs>(args: SelectSubset<T, enfermedadesFindUniqueArgs<ExtArgs>>): Prisma__enfermedadesClient<$Result.GetResult<Prisma.$enfermedadesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enfermedades that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {enfermedadesFindUniqueOrThrowArgs} args - Arguments to find a Enfermedades
     * @example
     * // Get one Enfermedades
     * const enfermedades = await prisma.enfermedades.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends enfermedadesFindUniqueOrThrowArgs>(args: SelectSubset<T, enfermedadesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__enfermedadesClient<$Result.GetResult<Prisma.$enfermedadesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enfermedades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enfermedadesFindFirstArgs} args - Arguments to find a Enfermedades
     * @example
     * // Get one Enfermedades
     * const enfermedades = await prisma.enfermedades.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends enfermedadesFindFirstArgs>(args?: SelectSubset<T, enfermedadesFindFirstArgs<ExtArgs>>): Prisma__enfermedadesClient<$Result.GetResult<Prisma.$enfermedadesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enfermedades that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enfermedadesFindFirstOrThrowArgs} args - Arguments to find a Enfermedades
     * @example
     * // Get one Enfermedades
     * const enfermedades = await prisma.enfermedades.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends enfermedadesFindFirstOrThrowArgs>(args?: SelectSubset<T, enfermedadesFindFirstOrThrowArgs<ExtArgs>>): Prisma__enfermedadesClient<$Result.GetResult<Prisma.$enfermedadesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enfermedades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enfermedadesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enfermedades
     * const enfermedades = await prisma.enfermedades.findMany()
     * 
     * // Get first 10 Enfermedades
     * const enfermedades = await prisma.enfermedades.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enfermedadesWithIdOnly = await prisma.enfermedades.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends enfermedadesFindManyArgs>(args?: SelectSubset<T, enfermedadesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enfermedadesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enfermedades.
     * @param {enfermedadesCreateArgs} args - Arguments to create a Enfermedades.
     * @example
     * // Create one Enfermedades
     * const Enfermedades = await prisma.enfermedades.create({
     *   data: {
     *     // ... data to create a Enfermedades
     *   }
     * })
     * 
     */
    create<T extends enfermedadesCreateArgs>(args: SelectSubset<T, enfermedadesCreateArgs<ExtArgs>>): Prisma__enfermedadesClient<$Result.GetResult<Prisma.$enfermedadesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enfermedades.
     * @param {enfermedadesCreateManyArgs} args - Arguments to create many Enfermedades.
     * @example
     * // Create many Enfermedades
     * const enfermedades = await prisma.enfermedades.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends enfermedadesCreateManyArgs>(args?: SelectSubset<T, enfermedadesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enfermedades and returns the data saved in the database.
     * @param {enfermedadesCreateManyAndReturnArgs} args - Arguments to create many Enfermedades.
     * @example
     * // Create many Enfermedades
     * const enfermedades = await prisma.enfermedades.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enfermedades and only return the `id`
     * const enfermedadesWithIdOnly = await prisma.enfermedades.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends enfermedadesCreateManyAndReturnArgs>(args?: SelectSubset<T, enfermedadesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enfermedadesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Enfermedades.
     * @param {enfermedadesDeleteArgs} args - Arguments to delete one Enfermedades.
     * @example
     * // Delete one Enfermedades
     * const Enfermedades = await prisma.enfermedades.delete({
     *   where: {
     *     // ... filter to delete one Enfermedades
     *   }
     * })
     * 
     */
    delete<T extends enfermedadesDeleteArgs>(args: SelectSubset<T, enfermedadesDeleteArgs<ExtArgs>>): Prisma__enfermedadesClient<$Result.GetResult<Prisma.$enfermedadesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enfermedades.
     * @param {enfermedadesUpdateArgs} args - Arguments to update one Enfermedades.
     * @example
     * // Update one Enfermedades
     * const enfermedades = await prisma.enfermedades.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends enfermedadesUpdateArgs>(args: SelectSubset<T, enfermedadesUpdateArgs<ExtArgs>>): Prisma__enfermedadesClient<$Result.GetResult<Prisma.$enfermedadesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enfermedades.
     * @param {enfermedadesDeleteManyArgs} args - Arguments to filter Enfermedades to delete.
     * @example
     * // Delete a few Enfermedades
     * const { count } = await prisma.enfermedades.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends enfermedadesDeleteManyArgs>(args?: SelectSubset<T, enfermedadesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enfermedades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enfermedadesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enfermedades
     * const enfermedades = await prisma.enfermedades.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends enfermedadesUpdateManyArgs>(args: SelectSubset<T, enfermedadesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enfermedades and returns the data updated in the database.
     * @param {enfermedadesUpdateManyAndReturnArgs} args - Arguments to update many Enfermedades.
     * @example
     * // Update many Enfermedades
     * const enfermedades = await prisma.enfermedades.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enfermedades and only return the `id`
     * const enfermedadesWithIdOnly = await prisma.enfermedades.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends enfermedadesUpdateManyAndReturnArgs>(args: SelectSubset<T, enfermedadesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enfermedadesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Enfermedades.
     * @param {enfermedadesUpsertArgs} args - Arguments to update or create a Enfermedades.
     * @example
     * // Update or create a Enfermedades
     * const enfermedades = await prisma.enfermedades.upsert({
     *   create: {
     *     // ... data to create a Enfermedades
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enfermedades we want to update
     *   }
     * })
     */
    upsert<T extends enfermedadesUpsertArgs>(args: SelectSubset<T, enfermedadesUpsertArgs<ExtArgs>>): Prisma__enfermedadesClient<$Result.GetResult<Prisma.$enfermedadesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enfermedades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enfermedadesCountArgs} args - Arguments to filter Enfermedades to count.
     * @example
     * // Count the number of Enfermedades
     * const count = await prisma.enfermedades.count({
     *   where: {
     *     // ... the filter for the Enfermedades we want to count
     *   }
     * })
    **/
    count<T extends enfermedadesCountArgs>(
      args?: Subset<T, enfermedadesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnfermedadesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enfermedades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnfermedadesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnfermedadesAggregateArgs>(args: Subset<T, EnfermedadesAggregateArgs>): Prisma.PrismaPromise<GetEnfermedadesAggregateType<T>>

    /**
     * Group by Enfermedades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enfermedadesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends enfermedadesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: enfermedadesGroupByArgs['orderBy'] }
        : { orderBy?: enfermedadesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, enfermedadesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnfermedadesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the enfermedades model
   */
  readonly fields: enfermedadesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for enfermedades.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__enfermedadesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pacientes<T extends enfermedades$pacientesArgs<ExtArgs> = {}>(args?: Subset<T, enfermedades$pacientesArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the enfermedades model
   */
  interface enfermedadesFieldRefs {
    readonly id: FieldRef<"enfermedades", 'Int'>
    readonly paciente_id: FieldRef<"enfermedades", 'Int'>
    readonly enfermedad: FieldRef<"enfermedades", 'String'>
  }
    

  // Custom InputTypes
  /**
   * enfermedades findUnique
   */
  export type enfermedadesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enfermedades
     */
    select?: enfermedadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enfermedades
     */
    omit?: enfermedadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enfermedadesInclude<ExtArgs> | null
    /**
     * Filter, which enfermedades to fetch.
     */
    where: enfermedadesWhereUniqueInput
  }

  /**
   * enfermedades findUniqueOrThrow
   */
  export type enfermedadesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enfermedades
     */
    select?: enfermedadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enfermedades
     */
    omit?: enfermedadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enfermedadesInclude<ExtArgs> | null
    /**
     * Filter, which enfermedades to fetch.
     */
    where: enfermedadesWhereUniqueInput
  }

  /**
   * enfermedades findFirst
   */
  export type enfermedadesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enfermedades
     */
    select?: enfermedadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enfermedades
     */
    omit?: enfermedadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enfermedadesInclude<ExtArgs> | null
    /**
     * Filter, which enfermedades to fetch.
     */
    where?: enfermedadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enfermedades to fetch.
     */
    orderBy?: enfermedadesOrderByWithRelationInput | enfermedadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enfermedades.
     */
    cursor?: enfermedadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enfermedades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enfermedades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enfermedades.
     */
    distinct?: EnfermedadesScalarFieldEnum | EnfermedadesScalarFieldEnum[]
  }

  /**
   * enfermedades findFirstOrThrow
   */
  export type enfermedadesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enfermedades
     */
    select?: enfermedadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enfermedades
     */
    omit?: enfermedadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enfermedadesInclude<ExtArgs> | null
    /**
     * Filter, which enfermedades to fetch.
     */
    where?: enfermedadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enfermedades to fetch.
     */
    orderBy?: enfermedadesOrderByWithRelationInput | enfermedadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enfermedades.
     */
    cursor?: enfermedadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enfermedades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enfermedades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enfermedades.
     */
    distinct?: EnfermedadesScalarFieldEnum | EnfermedadesScalarFieldEnum[]
  }

  /**
   * enfermedades findMany
   */
  export type enfermedadesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enfermedades
     */
    select?: enfermedadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enfermedades
     */
    omit?: enfermedadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enfermedadesInclude<ExtArgs> | null
    /**
     * Filter, which enfermedades to fetch.
     */
    where?: enfermedadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enfermedades to fetch.
     */
    orderBy?: enfermedadesOrderByWithRelationInput | enfermedadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing enfermedades.
     */
    cursor?: enfermedadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enfermedades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enfermedades.
     */
    skip?: number
    distinct?: EnfermedadesScalarFieldEnum | EnfermedadesScalarFieldEnum[]
  }

  /**
   * enfermedades create
   */
  export type enfermedadesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enfermedades
     */
    select?: enfermedadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enfermedades
     */
    omit?: enfermedadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enfermedadesInclude<ExtArgs> | null
    /**
     * The data needed to create a enfermedades.
     */
    data: XOR<enfermedadesCreateInput, enfermedadesUncheckedCreateInput>
  }

  /**
   * enfermedades createMany
   */
  export type enfermedadesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many enfermedades.
     */
    data: enfermedadesCreateManyInput | enfermedadesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * enfermedades createManyAndReturn
   */
  export type enfermedadesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enfermedades
     */
    select?: enfermedadesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the enfermedades
     */
    omit?: enfermedadesOmit<ExtArgs> | null
    /**
     * The data used to create many enfermedades.
     */
    data: enfermedadesCreateManyInput | enfermedadesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enfermedadesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * enfermedades update
   */
  export type enfermedadesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enfermedades
     */
    select?: enfermedadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enfermedades
     */
    omit?: enfermedadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enfermedadesInclude<ExtArgs> | null
    /**
     * The data needed to update a enfermedades.
     */
    data: XOR<enfermedadesUpdateInput, enfermedadesUncheckedUpdateInput>
    /**
     * Choose, which enfermedades to update.
     */
    where: enfermedadesWhereUniqueInput
  }

  /**
   * enfermedades updateMany
   */
  export type enfermedadesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update enfermedades.
     */
    data: XOR<enfermedadesUpdateManyMutationInput, enfermedadesUncheckedUpdateManyInput>
    /**
     * Filter which enfermedades to update
     */
    where?: enfermedadesWhereInput
    /**
     * Limit how many enfermedades to update.
     */
    limit?: number
  }

  /**
   * enfermedades updateManyAndReturn
   */
  export type enfermedadesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enfermedades
     */
    select?: enfermedadesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the enfermedades
     */
    omit?: enfermedadesOmit<ExtArgs> | null
    /**
     * The data used to update enfermedades.
     */
    data: XOR<enfermedadesUpdateManyMutationInput, enfermedadesUncheckedUpdateManyInput>
    /**
     * Filter which enfermedades to update
     */
    where?: enfermedadesWhereInput
    /**
     * Limit how many enfermedades to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enfermedadesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * enfermedades upsert
   */
  export type enfermedadesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enfermedades
     */
    select?: enfermedadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enfermedades
     */
    omit?: enfermedadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enfermedadesInclude<ExtArgs> | null
    /**
     * The filter to search for the enfermedades to update in case it exists.
     */
    where: enfermedadesWhereUniqueInput
    /**
     * In case the enfermedades found by the `where` argument doesn't exist, create a new enfermedades with this data.
     */
    create: XOR<enfermedadesCreateInput, enfermedadesUncheckedCreateInput>
    /**
     * In case the enfermedades was found with the provided `where` argument, update it with this data.
     */
    update: XOR<enfermedadesUpdateInput, enfermedadesUncheckedUpdateInput>
  }

  /**
   * enfermedades delete
   */
  export type enfermedadesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enfermedades
     */
    select?: enfermedadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enfermedades
     */
    omit?: enfermedadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enfermedadesInclude<ExtArgs> | null
    /**
     * Filter which enfermedades to delete.
     */
    where: enfermedadesWhereUniqueInput
  }

  /**
   * enfermedades deleteMany
   */
  export type enfermedadesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enfermedades to delete
     */
    where?: enfermedadesWhereInput
    /**
     * Limit how many enfermedades to delete.
     */
    limit?: number
  }

  /**
   * enfermedades.pacientes
   */
  export type enfermedades$pacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    where?: pacientesWhereInput
  }

  /**
   * enfermedades without action
   */
  export type enfermedadesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enfermedades
     */
    select?: enfermedadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enfermedades
     */
    omit?: enfermedadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enfermedadesInclude<ExtArgs> | null
  }


  /**
   * Model historial_cirugias
   */

  export type AggregateHistorial_cirugias = {
    _count: Historial_cirugiasCountAggregateOutputType | null
    _avg: Historial_cirugiasAvgAggregateOutputType | null
    _sum: Historial_cirugiasSumAggregateOutputType | null
    _min: Historial_cirugiasMinAggregateOutputType | null
    _max: Historial_cirugiasMaxAggregateOutputType | null
  }

  export type Historial_cirugiasAvgAggregateOutputType = {
    id: number | null
    paciente_id: number | null
  }

  export type Historial_cirugiasSumAggregateOutputType = {
    id: number | null
    paciente_id: number | null
  }

  export type Historial_cirugiasMinAggregateOutputType = {
    id: number | null
    paciente_id: number | null
    cirugia: string | null
    fecha: Date | null
    observaciones: string | null
  }

  export type Historial_cirugiasMaxAggregateOutputType = {
    id: number | null
    paciente_id: number | null
    cirugia: string | null
    fecha: Date | null
    observaciones: string | null
  }

  export type Historial_cirugiasCountAggregateOutputType = {
    id: number
    paciente_id: number
    cirugia: number
    fecha: number
    observaciones: number
    _all: number
  }


  export type Historial_cirugiasAvgAggregateInputType = {
    id?: true
    paciente_id?: true
  }

  export type Historial_cirugiasSumAggregateInputType = {
    id?: true
    paciente_id?: true
  }

  export type Historial_cirugiasMinAggregateInputType = {
    id?: true
    paciente_id?: true
    cirugia?: true
    fecha?: true
    observaciones?: true
  }

  export type Historial_cirugiasMaxAggregateInputType = {
    id?: true
    paciente_id?: true
    cirugia?: true
    fecha?: true
    observaciones?: true
  }

  export type Historial_cirugiasCountAggregateInputType = {
    id?: true
    paciente_id?: true
    cirugia?: true
    fecha?: true
    observaciones?: true
    _all?: true
  }

  export type Historial_cirugiasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which historial_cirugias to aggregate.
     */
    where?: historial_cirugiasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historial_cirugias to fetch.
     */
    orderBy?: historial_cirugiasOrderByWithRelationInput | historial_cirugiasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: historial_cirugiasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historial_cirugias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historial_cirugias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned historial_cirugias
    **/
    _count?: true | Historial_cirugiasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Historial_cirugiasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Historial_cirugiasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Historial_cirugiasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Historial_cirugiasMaxAggregateInputType
  }

  export type GetHistorial_cirugiasAggregateType<T extends Historial_cirugiasAggregateArgs> = {
        [P in keyof T & keyof AggregateHistorial_cirugias]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistorial_cirugias[P]>
      : GetScalarType<T[P], AggregateHistorial_cirugias[P]>
  }




  export type historial_cirugiasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: historial_cirugiasWhereInput
    orderBy?: historial_cirugiasOrderByWithAggregationInput | historial_cirugiasOrderByWithAggregationInput[]
    by: Historial_cirugiasScalarFieldEnum[] | Historial_cirugiasScalarFieldEnum
    having?: historial_cirugiasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Historial_cirugiasCountAggregateInputType | true
    _avg?: Historial_cirugiasAvgAggregateInputType
    _sum?: Historial_cirugiasSumAggregateInputType
    _min?: Historial_cirugiasMinAggregateInputType
    _max?: Historial_cirugiasMaxAggregateInputType
  }

  export type Historial_cirugiasGroupByOutputType = {
    id: number
    paciente_id: number | null
    cirugia: string
    fecha: Date | null
    observaciones: string | null
    _count: Historial_cirugiasCountAggregateOutputType | null
    _avg: Historial_cirugiasAvgAggregateOutputType | null
    _sum: Historial_cirugiasSumAggregateOutputType | null
    _min: Historial_cirugiasMinAggregateOutputType | null
    _max: Historial_cirugiasMaxAggregateOutputType | null
  }

  type GetHistorial_cirugiasGroupByPayload<T extends historial_cirugiasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Historial_cirugiasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Historial_cirugiasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Historial_cirugiasGroupByOutputType[P]>
            : GetScalarType<T[P], Historial_cirugiasGroupByOutputType[P]>
        }
      >
    >


  export type historial_cirugiasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paciente_id?: boolean
    cirugia?: boolean
    fecha?: boolean
    observaciones?: boolean
    pacientes?: boolean | historial_cirugias$pacientesArgs<ExtArgs>
  }, ExtArgs["result"]["historial_cirugias"]>

  export type historial_cirugiasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paciente_id?: boolean
    cirugia?: boolean
    fecha?: boolean
    observaciones?: boolean
    pacientes?: boolean | historial_cirugias$pacientesArgs<ExtArgs>
  }, ExtArgs["result"]["historial_cirugias"]>

  export type historial_cirugiasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paciente_id?: boolean
    cirugia?: boolean
    fecha?: boolean
    observaciones?: boolean
    pacientes?: boolean | historial_cirugias$pacientesArgs<ExtArgs>
  }, ExtArgs["result"]["historial_cirugias"]>

  export type historial_cirugiasSelectScalar = {
    id?: boolean
    paciente_id?: boolean
    cirugia?: boolean
    fecha?: boolean
    observaciones?: boolean
  }

  export type historial_cirugiasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "paciente_id" | "cirugia" | "fecha" | "observaciones", ExtArgs["result"]["historial_cirugias"]>
  export type historial_cirugiasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | historial_cirugias$pacientesArgs<ExtArgs>
  }
  export type historial_cirugiasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | historial_cirugias$pacientesArgs<ExtArgs>
  }
  export type historial_cirugiasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | historial_cirugias$pacientesArgs<ExtArgs>
  }

  export type $historial_cirugiasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "historial_cirugias"
    objects: {
      pacientes: Prisma.$pacientesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      paciente_id: number | null
      cirugia: string
      fecha: Date | null
      observaciones: string | null
    }, ExtArgs["result"]["historial_cirugias"]>
    composites: {}
  }

  type historial_cirugiasGetPayload<S extends boolean | null | undefined | historial_cirugiasDefaultArgs> = $Result.GetResult<Prisma.$historial_cirugiasPayload, S>

  type historial_cirugiasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<historial_cirugiasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Historial_cirugiasCountAggregateInputType | true
    }

  export interface historial_cirugiasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['historial_cirugias'], meta: { name: 'historial_cirugias' } }
    /**
     * Find zero or one Historial_cirugias that matches the filter.
     * @param {historial_cirugiasFindUniqueArgs} args - Arguments to find a Historial_cirugias
     * @example
     * // Get one Historial_cirugias
     * const historial_cirugias = await prisma.historial_cirugias.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends historial_cirugiasFindUniqueArgs>(args: SelectSubset<T, historial_cirugiasFindUniqueArgs<ExtArgs>>): Prisma__historial_cirugiasClient<$Result.GetResult<Prisma.$historial_cirugiasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Historial_cirugias that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {historial_cirugiasFindUniqueOrThrowArgs} args - Arguments to find a Historial_cirugias
     * @example
     * // Get one Historial_cirugias
     * const historial_cirugias = await prisma.historial_cirugias.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends historial_cirugiasFindUniqueOrThrowArgs>(args: SelectSubset<T, historial_cirugiasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__historial_cirugiasClient<$Result.GetResult<Prisma.$historial_cirugiasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historial_cirugias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historial_cirugiasFindFirstArgs} args - Arguments to find a Historial_cirugias
     * @example
     * // Get one Historial_cirugias
     * const historial_cirugias = await prisma.historial_cirugias.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends historial_cirugiasFindFirstArgs>(args?: SelectSubset<T, historial_cirugiasFindFirstArgs<ExtArgs>>): Prisma__historial_cirugiasClient<$Result.GetResult<Prisma.$historial_cirugiasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historial_cirugias that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historial_cirugiasFindFirstOrThrowArgs} args - Arguments to find a Historial_cirugias
     * @example
     * // Get one Historial_cirugias
     * const historial_cirugias = await prisma.historial_cirugias.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends historial_cirugiasFindFirstOrThrowArgs>(args?: SelectSubset<T, historial_cirugiasFindFirstOrThrowArgs<ExtArgs>>): Prisma__historial_cirugiasClient<$Result.GetResult<Prisma.$historial_cirugiasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Historial_cirugias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historial_cirugiasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Historial_cirugias
     * const historial_cirugias = await prisma.historial_cirugias.findMany()
     * 
     * // Get first 10 Historial_cirugias
     * const historial_cirugias = await prisma.historial_cirugias.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historial_cirugiasWithIdOnly = await prisma.historial_cirugias.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends historial_cirugiasFindManyArgs>(args?: SelectSubset<T, historial_cirugiasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historial_cirugiasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Historial_cirugias.
     * @param {historial_cirugiasCreateArgs} args - Arguments to create a Historial_cirugias.
     * @example
     * // Create one Historial_cirugias
     * const Historial_cirugias = await prisma.historial_cirugias.create({
     *   data: {
     *     // ... data to create a Historial_cirugias
     *   }
     * })
     * 
     */
    create<T extends historial_cirugiasCreateArgs>(args: SelectSubset<T, historial_cirugiasCreateArgs<ExtArgs>>): Prisma__historial_cirugiasClient<$Result.GetResult<Prisma.$historial_cirugiasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Historial_cirugias.
     * @param {historial_cirugiasCreateManyArgs} args - Arguments to create many Historial_cirugias.
     * @example
     * // Create many Historial_cirugias
     * const historial_cirugias = await prisma.historial_cirugias.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends historial_cirugiasCreateManyArgs>(args?: SelectSubset<T, historial_cirugiasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Historial_cirugias and returns the data saved in the database.
     * @param {historial_cirugiasCreateManyAndReturnArgs} args - Arguments to create many Historial_cirugias.
     * @example
     * // Create many Historial_cirugias
     * const historial_cirugias = await prisma.historial_cirugias.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Historial_cirugias and only return the `id`
     * const historial_cirugiasWithIdOnly = await prisma.historial_cirugias.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends historial_cirugiasCreateManyAndReturnArgs>(args?: SelectSubset<T, historial_cirugiasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historial_cirugiasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Historial_cirugias.
     * @param {historial_cirugiasDeleteArgs} args - Arguments to delete one Historial_cirugias.
     * @example
     * // Delete one Historial_cirugias
     * const Historial_cirugias = await prisma.historial_cirugias.delete({
     *   where: {
     *     // ... filter to delete one Historial_cirugias
     *   }
     * })
     * 
     */
    delete<T extends historial_cirugiasDeleteArgs>(args: SelectSubset<T, historial_cirugiasDeleteArgs<ExtArgs>>): Prisma__historial_cirugiasClient<$Result.GetResult<Prisma.$historial_cirugiasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Historial_cirugias.
     * @param {historial_cirugiasUpdateArgs} args - Arguments to update one Historial_cirugias.
     * @example
     * // Update one Historial_cirugias
     * const historial_cirugias = await prisma.historial_cirugias.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends historial_cirugiasUpdateArgs>(args: SelectSubset<T, historial_cirugiasUpdateArgs<ExtArgs>>): Prisma__historial_cirugiasClient<$Result.GetResult<Prisma.$historial_cirugiasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Historial_cirugias.
     * @param {historial_cirugiasDeleteManyArgs} args - Arguments to filter Historial_cirugias to delete.
     * @example
     * // Delete a few Historial_cirugias
     * const { count } = await prisma.historial_cirugias.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends historial_cirugiasDeleteManyArgs>(args?: SelectSubset<T, historial_cirugiasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historial_cirugias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historial_cirugiasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Historial_cirugias
     * const historial_cirugias = await prisma.historial_cirugias.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends historial_cirugiasUpdateManyArgs>(args: SelectSubset<T, historial_cirugiasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historial_cirugias and returns the data updated in the database.
     * @param {historial_cirugiasUpdateManyAndReturnArgs} args - Arguments to update many Historial_cirugias.
     * @example
     * // Update many Historial_cirugias
     * const historial_cirugias = await prisma.historial_cirugias.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Historial_cirugias and only return the `id`
     * const historial_cirugiasWithIdOnly = await prisma.historial_cirugias.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends historial_cirugiasUpdateManyAndReturnArgs>(args: SelectSubset<T, historial_cirugiasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historial_cirugiasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Historial_cirugias.
     * @param {historial_cirugiasUpsertArgs} args - Arguments to update or create a Historial_cirugias.
     * @example
     * // Update or create a Historial_cirugias
     * const historial_cirugias = await prisma.historial_cirugias.upsert({
     *   create: {
     *     // ... data to create a Historial_cirugias
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Historial_cirugias we want to update
     *   }
     * })
     */
    upsert<T extends historial_cirugiasUpsertArgs>(args: SelectSubset<T, historial_cirugiasUpsertArgs<ExtArgs>>): Prisma__historial_cirugiasClient<$Result.GetResult<Prisma.$historial_cirugiasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Historial_cirugias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historial_cirugiasCountArgs} args - Arguments to filter Historial_cirugias to count.
     * @example
     * // Count the number of Historial_cirugias
     * const count = await prisma.historial_cirugias.count({
     *   where: {
     *     // ... the filter for the Historial_cirugias we want to count
     *   }
     * })
    **/
    count<T extends historial_cirugiasCountArgs>(
      args?: Subset<T, historial_cirugiasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Historial_cirugiasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Historial_cirugias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historial_cirugiasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Historial_cirugiasAggregateArgs>(args: Subset<T, Historial_cirugiasAggregateArgs>): Prisma.PrismaPromise<GetHistorial_cirugiasAggregateType<T>>

    /**
     * Group by Historial_cirugias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historial_cirugiasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends historial_cirugiasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: historial_cirugiasGroupByArgs['orderBy'] }
        : { orderBy?: historial_cirugiasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, historial_cirugiasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistorial_cirugiasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the historial_cirugias model
   */
  readonly fields: historial_cirugiasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for historial_cirugias.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__historial_cirugiasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pacientes<T extends historial_cirugias$pacientesArgs<ExtArgs> = {}>(args?: Subset<T, historial_cirugias$pacientesArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the historial_cirugias model
   */
  interface historial_cirugiasFieldRefs {
    readonly id: FieldRef<"historial_cirugias", 'Int'>
    readonly paciente_id: FieldRef<"historial_cirugias", 'Int'>
    readonly cirugia: FieldRef<"historial_cirugias", 'String'>
    readonly fecha: FieldRef<"historial_cirugias", 'DateTime'>
    readonly observaciones: FieldRef<"historial_cirugias", 'String'>
  }
    

  // Custom InputTypes
  /**
   * historial_cirugias findUnique
   */
  export type historial_cirugiasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_cirugias
     */
    select?: historial_cirugiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_cirugias
     */
    omit?: historial_cirugiasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_cirugiasInclude<ExtArgs> | null
    /**
     * Filter, which historial_cirugias to fetch.
     */
    where: historial_cirugiasWhereUniqueInput
  }

  /**
   * historial_cirugias findUniqueOrThrow
   */
  export type historial_cirugiasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_cirugias
     */
    select?: historial_cirugiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_cirugias
     */
    omit?: historial_cirugiasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_cirugiasInclude<ExtArgs> | null
    /**
     * Filter, which historial_cirugias to fetch.
     */
    where: historial_cirugiasWhereUniqueInput
  }

  /**
   * historial_cirugias findFirst
   */
  export type historial_cirugiasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_cirugias
     */
    select?: historial_cirugiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_cirugias
     */
    omit?: historial_cirugiasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_cirugiasInclude<ExtArgs> | null
    /**
     * Filter, which historial_cirugias to fetch.
     */
    where?: historial_cirugiasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historial_cirugias to fetch.
     */
    orderBy?: historial_cirugiasOrderByWithRelationInput | historial_cirugiasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for historial_cirugias.
     */
    cursor?: historial_cirugiasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historial_cirugias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historial_cirugias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of historial_cirugias.
     */
    distinct?: Historial_cirugiasScalarFieldEnum | Historial_cirugiasScalarFieldEnum[]
  }

  /**
   * historial_cirugias findFirstOrThrow
   */
  export type historial_cirugiasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_cirugias
     */
    select?: historial_cirugiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_cirugias
     */
    omit?: historial_cirugiasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_cirugiasInclude<ExtArgs> | null
    /**
     * Filter, which historial_cirugias to fetch.
     */
    where?: historial_cirugiasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historial_cirugias to fetch.
     */
    orderBy?: historial_cirugiasOrderByWithRelationInput | historial_cirugiasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for historial_cirugias.
     */
    cursor?: historial_cirugiasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historial_cirugias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historial_cirugias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of historial_cirugias.
     */
    distinct?: Historial_cirugiasScalarFieldEnum | Historial_cirugiasScalarFieldEnum[]
  }

  /**
   * historial_cirugias findMany
   */
  export type historial_cirugiasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_cirugias
     */
    select?: historial_cirugiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_cirugias
     */
    omit?: historial_cirugiasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_cirugiasInclude<ExtArgs> | null
    /**
     * Filter, which historial_cirugias to fetch.
     */
    where?: historial_cirugiasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historial_cirugias to fetch.
     */
    orderBy?: historial_cirugiasOrderByWithRelationInput | historial_cirugiasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing historial_cirugias.
     */
    cursor?: historial_cirugiasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historial_cirugias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historial_cirugias.
     */
    skip?: number
    distinct?: Historial_cirugiasScalarFieldEnum | Historial_cirugiasScalarFieldEnum[]
  }

  /**
   * historial_cirugias create
   */
  export type historial_cirugiasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_cirugias
     */
    select?: historial_cirugiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_cirugias
     */
    omit?: historial_cirugiasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_cirugiasInclude<ExtArgs> | null
    /**
     * The data needed to create a historial_cirugias.
     */
    data: XOR<historial_cirugiasCreateInput, historial_cirugiasUncheckedCreateInput>
  }

  /**
   * historial_cirugias createMany
   */
  export type historial_cirugiasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many historial_cirugias.
     */
    data: historial_cirugiasCreateManyInput | historial_cirugiasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * historial_cirugias createManyAndReturn
   */
  export type historial_cirugiasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_cirugias
     */
    select?: historial_cirugiasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the historial_cirugias
     */
    omit?: historial_cirugiasOmit<ExtArgs> | null
    /**
     * The data used to create many historial_cirugias.
     */
    data: historial_cirugiasCreateManyInput | historial_cirugiasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_cirugiasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * historial_cirugias update
   */
  export type historial_cirugiasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_cirugias
     */
    select?: historial_cirugiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_cirugias
     */
    omit?: historial_cirugiasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_cirugiasInclude<ExtArgs> | null
    /**
     * The data needed to update a historial_cirugias.
     */
    data: XOR<historial_cirugiasUpdateInput, historial_cirugiasUncheckedUpdateInput>
    /**
     * Choose, which historial_cirugias to update.
     */
    where: historial_cirugiasWhereUniqueInput
  }

  /**
   * historial_cirugias updateMany
   */
  export type historial_cirugiasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update historial_cirugias.
     */
    data: XOR<historial_cirugiasUpdateManyMutationInput, historial_cirugiasUncheckedUpdateManyInput>
    /**
     * Filter which historial_cirugias to update
     */
    where?: historial_cirugiasWhereInput
    /**
     * Limit how many historial_cirugias to update.
     */
    limit?: number
  }

  /**
   * historial_cirugias updateManyAndReturn
   */
  export type historial_cirugiasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_cirugias
     */
    select?: historial_cirugiasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the historial_cirugias
     */
    omit?: historial_cirugiasOmit<ExtArgs> | null
    /**
     * The data used to update historial_cirugias.
     */
    data: XOR<historial_cirugiasUpdateManyMutationInput, historial_cirugiasUncheckedUpdateManyInput>
    /**
     * Filter which historial_cirugias to update
     */
    where?: historial_cirugiasWhereInput
    /**
     * Limit how many historial_cirugias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_cirugiasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * historial_cirugias upsert
   */
  export type historial_cirugiasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_cirugias
     */
    select?: historial_cirugiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_cirugias
     */
    omit?: historial_cirugiasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_cirugiasInclude<ExtArgs> | null
    /**
     * The filter to search for the historial_cirugias to update in case it exists.
     */
    where: historial_cirugiasWhereUniqueInput
    /**
     * In case the historial_cirugias found by the `where` argument doesn't exist, create a new historial_cirugias with this data.
     */
    create: XOR<historial_cirugiasCreateInput, historial_cirugiasUncheckedCreateInput>
    /**
     * In case the historial_cirugias was found with the provided `where` argument, update it with this data.
     */
    update: XOR<historial_cirugiasUpdateInput, historial_cirugiasUncheckedUpdateInput>
  }

  /**
   * historial_cirugias delete
   */
  export type historial_cirugiasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_cirugias
     */
    select?: historial_cirugiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_cirugias
     */
    omit?: historial_cirugiasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_cirugiasInclude<ExtArgs> | null
    /**
     * Filter which historial_cirugias to delete.
     */
    where: historial_cirugiasWhereUniqueInput
  }

  /**
   * historial_cirugias deleteMany
   */
  export type historial_cirugiasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which historial_cirugias to delete
     */
    where?: historial_cirugiasWhereInput
    /**
     * Limit how many historial_cirugias to delete.
     */
    limit?: number
  }

  /**
   * historial_cirugias.pacientes
   */
  export type historial_cirugias$pacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    where?: pacientesWhereInput
  }

  /**
   * historial_cirugias without action
   */
  export type historial_cirugiasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_cirugias
     */
    select?: historial_cirugiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_cirugias
     */
    omit?: historial_cirugiasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_cirugiasInclude<ExtArgs> | null
  }


  /**
   * Model medicamentos_actuales
   */

  export type AggregateMedicamentos_actuales = {
    _count: Medicamentos_actualesCountAggregateOutputType | null
    _avg: Medicamentos_actualesAvgAggregateOutputType | null
    _sum: Medicamentos_actualesSumAggregateOutputType | null
    _min: Medicamentos_actualesMinAggregateOutputType | null
    _max: Medicamentos_actualesMaxAggregateOutputType | null
  }

  export type Medicamentos_actualesAvgAggregateOutputType = {
    id: number | null
    paciente_id: number | null
  }

  export type Medicamentos_actualesSumAggregateOutputType = {
    id: number | null
    paciente_id: number | null
  }

  export type Medicamentos_actualesMinAggregateOutputType = {
    id: number | null
    paciente_id: number | null
    medicamento: string | null
    dosis: string | null
    frecuencia: string | null
    via_administracion: string | null
  }

  export type Medicamentos_actualesMaxAggregateOutputType = {
    id: number | null
    paciente_id: number | null
    medicamento: string | null
    dosis: string | null
    frecuencia: string | null
    via_administracion: string | null
  }

  export type Medicamentos_actualesCountAggregateOutputType = {
    id: number
    paciente_id: number
    medicamento: number
    dosis: number
    frecuencia: number
    via_administracion: number
    _all: number
  }


  export type Medicamentos_actualesAvgAggregateInputType = {
    id?: true
    paciente_id?: true
  }

  export type Medicamentos_actualesSumAggregateInputType = {
    id?: true
    paciente_id?: true
  }

  export type Medicamentos_actualesMinAggregateInputType = {
    id?: true
    paciente_id?: true
    medicamento?: true
    dosis?: true
    frecuencia?: true
    via_administracion?: true
  }

  export type Medicamentos_actualesMaxAggregateInputType = {
    id?: true
    paciente_id?: true
    medicamento?: true
    dosis?: true
    frecuencia?: true
    via_administracion?: true
  }

  export type Medicamentos_actualesCountAggregateInputType = {
    id?: true
    paciente_id?: true
    medicamento?: true
    dosis?: true
    frecuencia?: true
    via_administracion?: true
    _all?: true
  }

  export type Medicamentos_actualesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which medicamentos_actuales to aggregate.
     */
    where?: medicamentos_actualesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medicamentos_actuales to fetch.
     */
    orderBy?: medicamentos_actualesOrderByWithRelationInput | medicamentos_actualesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: medicamentos_actualesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medicamentos_actuales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medicamentos_actuales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned medicamentos_actuales
    **/
    _count?: true | Medicamentos_actualesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Medicamentos_actualesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Medicamentos_actualesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Medicamentos_actualesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Medicamentos_actualesMaxAggregateInputType
  }

  export type GetMedicamentos_actualesAggregateType<T extends Medicamentos_actualesAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicamentos_actuales]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicamentos_actuales[P]>
      : GetScalarType<T[P], AggregateMedicamentos_actuales[P]>
  }




  export type medicamentos_actualesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: medicamentos_actualesWhereInput
    orderBy?: medicamentos_actualesOrderByWithAggregationInput | medicamentos_actualesOrderByWithAggregationInput[]
    by: Medicamentos_actualesScalarFieldEnum[] | Medicamentos_actualesScalarFieldEnum
    having?: medicamentos_actualesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Medicamentos_actualesCountAggregateInputType | true
    _avg?: Medicamentos_actualesAvgAggregateInputType
    _sum?: Medicamentos_actualesSumAggregateInputType
    _min?: Medicamentos_actualesMinAggregateInputType
    _max?: Medicamentos_actualesMaxAggregateInputType
  }

  export type Medicamentos_actualesGroupByOutputType = {
    id: number
    paciente_id: number | null
    medicamento: string
    dosis: string
    frecuencia: string
    via_administracion: string
    _count: Medicamentos_actualesCountAggregateOutputType | null
    _avg: Medicamentos_actualesAvgAggregateOutputType | null
    _sum: Medicamentos_actualesSumAggregateOutputType | null
    _min: Medicamentos_actualesMinAggregateOutputType | null
    _max: Medicamentos_actualesMaxAggregateOutputType | null
  }

  type GetMedicamentos_actualesGroupByPayload<T extends medicamentos_actualesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Medicamentos_actualesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Medicamentos_actualesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Medicamentos_actualesGroupByOutputType[P]>
            : GetScalarType<T[P], Medicamentos_actualesGroupByOutputType[P]>
        }
      >
    >


  export type medicamentos_actualesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paciente_id?: boolean
    medicamento?: boolean
    dosis?: boolean
    frecuencia?: boolean
    via_administracion?: boolean
    pacientes?: boolean | medicamentos_actuales$pacientesArgs<ExtArgs>
  }, ExtArgs["result"]["medicamentos_actuales"]>

  export type medicamentos_actualesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paciente_id?: boolean
    medicamento?: boolean
    dosis?: boolean
    frecuencia?: boolean
    via_administracion?: boolean
    pacientes?: boolean | medicamentos_actuales$pacientesArgs<ExtArgs>
  }, ExtArgs["result"]["medicamentos_actuales"]>

  export type medicamentos_actualesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paciente_id?: boolean
    medicamento?: boolean
    dosis?: boolean
    frecuencia?: boolean
    via_administracion?: boolean
    pacientes?: boolean | medicamentos_actuales$pacientesArgs<ExtArgs>
  }, ExtArgs["result"]["medicamentos_actuales"]>

  export type medicamentos_actualesSelectScalar = {
    id?: boolean
    paciente_id?: boolean
    medicamento?: boolean
    dosis?: boolean
    frecuencia?: boolean
    via_administracion?: boolean
  }

  export type medicamentos_actualesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "paciente_id" | "medicamento" | "dosis" | "frecuencia" | "via_administracion", ExtArgs["result"]["medicamentos_actuales"]>
  export type medicamentos_actualesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | medicamentos_actuales$pacientesArgs<ExtArgs>
  }
  export type medicamentos_actualesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | medicamentos_actuales$pacientesArgs<ExtArgs>
  }
  export type medicamentos_actualesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | medicamentos_actuales$pacientesArgs<ExtArgs>
  }

  export type $medicamentos_actualesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "medicamentos_actuales"
    objects: {
      pacientes: Prisma.$pacientesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      paciente_id: number | null
      medicamento: string
      dosis: string
      frecuencia: string
      via_administracion: string
    }, ExtArgs["result"]["medicamentos_actuales"]>
    composites: {}
  }

  type medicamentos_actualesGetPayload<S extends boolean | null | undefined | medicamentos_actualesDefaultArgs> = $Result.GetResult<Prisma.$medicamentos_actualesPayload, S>

  type medicamentos_actualesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<medicamentos_actualesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Medicamentos_actualesCountAggregateInputType | true
    }

  export interface medicamentos_actualesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['medicamentos_actuales'], meta: { name: 'medicamentos_actuales' } }
    /**
     * Find zero or one Medicamentos_actuales that matches the filter.
     * @param {medicamentos_actualesFindUniqueArgs} args - Arguments to find a Medicamentos_actuales
     * @example
     * // Get one Medicamentos_actuales
     * const medicamentos_actuales = await prisma.medicamentos_actuales.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends medicamentos_actualesFindUniqueArgs>(args: SelectSubset<T, medicamentos_actualesFindUniqueArgs<ExtArgs>>): Prisma__medicamentos_actualesClient<$Result.GetResult<Prisma.$medicamentos_actualesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medicamentos_actuales that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {medicamentos_actualesFindUniqueOrThrowArgs} args - Arguments to find a Medicamentos_actuales
     * @example
     * // Get one Medicamentos_actuales
     * const medicamentos_actuales = await prisma.medicamentos_actuales.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends medicamentos_actualesFindUniqueOrThrowArgs>(args: SelectSubset<T, medicamentos_actualesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__medicamentos_actualesClient<$Result.GetResult<Prisma.$medicamentos_actualesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medicamentos_actuales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicamentos_actualesFindFirstArgs} args - Arguments to find a Medicamentos_actuales
     * @example
     * // Get one Medicamentos_actuales
     * const medicamentos_actuales = await prisma.medicamentos_actuales.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends medicamentos_actualesFindFirstArgs>(args?: SelectSubset<T, medicamentos_actualesFindFirstArgs<ExtArgs>>): Prisma__medicamentos_actualesClient<$Result.GetResult<Prisma.$medicamentos_actualesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medicamentos_actuales that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicamentos_actualesFindFirstOrThrowArgs} args - Arguments to find a Medicamentos_actuales
     * @example
     * // Get one Medicamentos_actuales
     * const medicamentos_actuales = await prisma.medicamentos_actuales.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends medicamentos_actualesFindFirstOrThrowArgs>(args?: SelectSubset<T, medicamentos_actualesFindFirstOrThrowArgs<ExtArgs>>): Prisma__medicamentos_actualesClient<$Result.GetResult<Prisma.$medicamentos_actualesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medicamentos_actuales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicamentos_actualesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medicamentos_actuales
     * const medicamentos_actuales = await prisma.medicamentos_actuales.findMany()
     * 
     * // Get first 10 Medicamentos_actuales
     * const medicamentos_actuales = await prisma.medicamentos_actuales.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicamentos_actualesWithIdOnly = await prisma.medicamentos_actuales.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends medicamentos_actualesFindManyArgs>(args?: SelectSubset<T, medicamentos_actualesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medicamentos_actualesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medicamentos_actuales.
     * @param {medicamentos_actualesCreateArgs} args - Arguments to create a Medicamentos_actuales.
     * @example
     * // Create one Medicamentos_actuales
     * const Medicamentos_actuales = await prisma.medicamentos_actuales.create({
     *   data: {
     *     // ... data to create a Medicamentos_actuales
     *   }
     * })
     * 
     */
    create<T extends medicamentos_actualesCreateArgs>(args: SelectSubset<T, medicamentos_actualesCreateArgs<ExtArgs>>): Prisma__medicamentos_actualesClient<$Result.GetResult<Prisma.$medicamentos_actualesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medicamentos_actuales.
     * @param {medicamentos_actualesCreateManyArgs} args - Arguments to create many Medicamentos_actuales.
     * @example
     * // Create many Medicamentos_actuales
     * const medicamentos_actuales = await prisma.medicamentos_actuales.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends medicamentos_actualesCreateManyArgs>(args?: SelectSubset<T, medicamentos_actualesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medicamentos_actuales and returns the data saved in the database.
     * @param {medicamentos_actualesCreateManyAndReturnArgs} args - Arguments to create many Medicamentos_actuales.
     * @example
     * // Create many Medicamentos_actuales
     * const medicamentos_actuales = await prisma.medicamentos_actuales.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medicamentos_actuales and only return the `id`
     * const medicamentos_actualesWithIdOnly = await prisma.medicamentos_actuales.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends medicamentos_actualesCreateManyAndReturnArgs>(args?: SelectSubset<T, medicamentos_actualesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medicamentos_actualesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Medicamentos_actuales.
     * @param {medicamentos_actualesDeleteArgs} args - Arguments to delete one Medicamentos_actuales.
     * @example
     * // Delete one Medicamentos_actuales
     * const Medicamentos_actuales = await prisma.medicamentos_actuales.delete({
     *   where: {
     *     // ... filter to delete one Medicamentos_actuales
     *   }
     * })
     * 
     */
    delete<T extends medicamentos_actualesDeleteArgs>(args: SelectSubset<T, medicamentos_actualesDeleteArgs<ExtArgs>>): Prisma__medicamentos_actualesClient<$Result.GetResult<Prisma.$medicamentos_actualesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medicamentos_actuales.
     * @param {medicamentos_actualesUpdateArgs} args - Arguments to update one Medicamentos_actuales.
     * @example
     * // Update one Medicamentos_actuales
     * const medicamentos_actuales = await prisma.medicamentos_actuales.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends medicamentos_actualesUpdateArgs>(args: SelectSubset<T, medicamentos_actualesUpdateArgs<ExtArgs>>): Prisma__medicamentos_actualesClient<$Result.GetResult<Prisma.$medicamentos_actualesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medicamentos_actuales.
     * @param {medicamentos_actualesDeleteManyArgs} args - Arguments to filter Medicamentos_actuales to delete.
     * @example
     * // Delete a few Medicamentos_actuales
     * const { count } = await prisma.medicamentos_actuales.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends medicamentos_actualesDeleteManyArgs>(args?: SelectSubset<T, medicamentos_actualesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicamentos_actuales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicamentos_actualesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medicamentos_actuales
     * const medicamentos_actuales = await prisma.medicamentos_actuales.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends medicamentos_actualesUpdateManyArgs>(args: SelectSubset<T, medicamentos_actualesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicamentos_actuales and returns the data updated in the database.
     * @param {medicamentos_actualesUpdateManyAndReturnArgs} args - Arguments to update many Medicamentos_actuales.
     * @example
     * // Update many Medicamentos_actuales
     * const medicamentos_actuales = await prisma.medicamentos_actuales.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Medicamentos_actuales and only return the `id`
     * const medicamentos_actualesWithIdOnly = await prisma.medicamentos_actuales.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends medicamentos_actualesUpdateManyAndReturnArgs>(args: SelectSubset<T, medicamentos_actualesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medicamentos_actualesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Medicamentos_actuales.
     * @param {medicamentos_actualesUpsertArgs} args - Arguments to update or create a Medicamentos_actuales.
     * @example
     * // Update or create a Medicamentos_actuales
     * const medicamentos_actuales = await prisma.medicamentos_actuales.upsert({
     *   create: {
     *     // ... data to create a Medicamentos_actuales
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medicamentos_actuales we want to update
     *   }
     * })
     */
    upsert<T extends medicamentos_actualesUpsertArgs>(args: SelectSubset<T, medicamentos_actualesUpsertArgs<ExtArgs>>): Prisma__medicamentos_actualesClient<$Result.GetResult<Prisma.$medicamentos_actualesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medicamentos_actuales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicamentos_actualesCountArgs} args - Arguments to filter Medicamentos_actuales to count.
     * @example
     * // Count the number of Medicamentos_actuales
     * const count = await prisma.medicamentos_actuales.count({
     *   where: {
     *     // ... the filter for the Medicamentos_actuales we want to count
     *   }
     * })
    **/
    count<T extends medicamentos_actualesCountArgs>(
      args?: Subset<T, medicamentos_actualesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Medicamentos_actualesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medicamentos_actuales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Medicamentos_actualesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Medicamentos_actualesAggregateArgs>(args: Subset<T, Medicamentos_actualesAggregateArgs>): Prisma.PrismaPromise<GetMedicamentos_actualesAggregateType<T>>

    /**
     * Group by Medicamentos_actuales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicamentos_actualesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends medicamentos_actualesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: medicamentos_actualesGroupByArgs['orderBy'] }
        : { orderBy?: medicamentos_actualesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, medicamentos_actualesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicamentos_actualesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the medicamentos_actuales model
   */
  readonly fields: medicamentos_actualesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for medicamentos_actuales.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__medicamentos_actualesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pacientes<T extends medicamentos_actuales$pacientesArgs<ExtArgs> = {}>(args?: Subset<T, medicamentos_actuales$pacientesArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the medicamentos_actuales model
   */
  interface medicamentos_actualesFieldRefs {
    readonly id: FieldRef<"medicamentos_actuales", 'Int'>
    readonly paciente_id: FieldRef<"medicamentos_actuales", 'Int'>
    readonly medicamento: FieldRef<"medicamentos_actuales", 'String'>
    readonly dosis: FieldRef<"medicamentos_actuales", 'String'>
    readonly frecuencia: FieldRef<"medicamentos_actuales", 'String'>
    readonly via_administracion: FieldRef<"medicamentos_actuales", 'String'>
  }
    

  // Custom InputTypes
  /**
   * medicamentos_actuales findUnique
   */
  export type medicamentos_actualesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicamentos_actuales
     */
    select?: medicamentos_actualesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicamentos_actuales
     */
    omit?: medicamentos_actualesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicamentos_actualesInclude<ExtArgs> | null
    /**
     * Filter, which medicamentos_actuales to fetch.
     */
    where: medicamentos_actualesWhereUniqueInput
  }

  /**
   * medicamentos_actuales findUniqueOrThrow
   */
  export type medicamentos_actualesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicamentos_actuales
     */
    select?: medicamentos_actualesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicamentos_actuales
     */
    omit?: medicamentos_actualesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicamentos_actualesInclude<ExtArgs> | null
    /**
     * Filter, which medicamentos_actuales to fetch.
     */
    where: medicamentos_actualesWhereUniqueInput
  }

  /**
   * medicamentos_actuales findFirst
   */
  export type medicamentos_actualesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicamentos_actuales
     */
    select?: medicamentos_actualesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicamentos_actuales
     */
    omit?: medicamentos_actualesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicamentos_actualesInclude<ExtArgs> | null
    /**
     * Filter, which medicamentos_actuales to fetch.
     */
    where?: medicamentos_actualesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medicamentos_actuales to fetch.
     */
    orderBy?: medicamentos_actualesOrderByWithRelationInput | medicamentos_actualesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for medicamentos_actuales.
     */
    cursor?: medicamentos_actualesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medicamentos_actuales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medicamentos_actuales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of medicamentos_actuales.
     */
    distinct?: Medicamentos_actualesScalarFieldEnum | Medicamentos_actualesScalarFieldEnum[]
  }

  /**
   * medicamentos_actuales findFirstOrThrow
   */
  export type medicamentos_actualesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicamentos_actuales
     */
    select?: medicamentos_actualesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicamentos_actuales
     */
    omit?: medicamentos_actualesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicamentos_actualesInclude<ExtArgs> | null
    /**
     * Filter, which medicamentos_actuales to fetch.
     */
    where?: medicamentos_actualesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medicamentos_actuales to fetch.
     */
    orderBy?: medicamentos_actualesOrderByWithRelationInput | medicamentos_actualesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for medicamentos_actuales.
     */
    cursor?: medicamentos_actualesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medicamentos_actuales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medicamentos_actuales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of medicamentos_actuales.
     */
    distinct?: Medicamentos_actualesScalarFieldEnum | Medicamentos_actualesScalarFieldEnum[]
  }

  /**
   * medicamentos_actuales findMany
   */
  export type medicamentos_actualesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicamentos_actuales
     */
    select?: medicamentos_actualesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicamentos_actuales
     */
    omit?: medicamentos_actualesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicamentos_actualesInclude<ExtArgs> | null
    /**
     * Filter, which medicamentos_actuales to fetch.
     */
    where?: medicamentos_actualesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medicamentos_actuales to fetch.
     */
    orderBy?: medicamentos_actualesOrderByWithRelationInput | medicamentos_actualesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing medicamentos_actuales.
     */
    cursor?: medicamentos_actualesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medicamentos_actuales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medicamentos_actuales.
     */
    skip?: number
    distinct?: Medicamentos_actualesScalarFieldEnum | Medicamentos_actualesScalarFieldEnum[]
  }

  /**
   * medicamentos_actuales create
   */
  export type medicamentos_actualesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicamentos_actuales
     */
    select?: medicamentos_actualesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicamentos_actuales
     */
    omit?: medicamentos_actualesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicamentos_actualesInclude<ExtArgs> | null
    /**
     * The data needed to create a medicamentos_actuales.
     */
    data: XOR<medicamentos_actualesCreateInput, medicamentos_actualesUncheckedCreateInput>
  }

  /**
   * medicamentos_actuales createMany
   */
  export type medicamentos_actualesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many medicamentos_actuales.
     */
    data: medicamentos_actualesCreateManyInput | medicamentos_actualesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * medicamentos_actuales createManyAndReturn
   */
  export type medicamentos_actualesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicamentos_actuales
     */
    select?: medicamentos_actualesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the medicamentos_actuales
     */
    omit?: medicamentos_actualesOmit<ExtArgs> | null
    /**
     * The data used to create many medicamentos_actuales.
     */
    data: medicamentos_actualesCreateManyInput | medicamentos_actualesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicamentos_actualesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * medicamentos_actuales update
   */
  export type medicamentos_actualesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicamentos_actuales
     */
    select?: medicamentos_actualesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicamentos_actuales
     */
    omit?: medicamentos_actualesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicamentos_actualesInclude<ExtArgs> | null
    /**
     * The data needed to update a medicamentos_actuales.
     */
    data: XOR<medicamentos_actualesUpdateInput, medicamentos_actualesUncheckedUpdateInput>
    /**
     * Choose, which medicamentos_actuales to update.
     */
    where: medicamentos_actualesWhereUniqueInput
  }

  /**
   * medicamentos_actuales updateMany
   */
  export type medicamentos_actualesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update medicamentos_actuales.
     */
    data: XOR<medicamentos_actualesUpdateManyMutationInput, medicamentos_actualesUncheckedUpdateManyInput>
    /**
     * Filter which medicamentos_actuales to update
     */
    where?: medicamentos_actualesWhereInput
    /**
     * Limit how many medicamentos_actuales to update.
     */
    limit?: number
  }

  /**
   * medicamentos_actuales updateManyAndReturn
   */
  export type medicamentos_actualesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicamentos_actuales
     */
    select?: medicamentos_actualesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the medicamentos_actuales
     */
    omit?: medicamentos_actualesOmit<ExtArgs> | null
    /**
     * The data used to update medicamentos_actuales.
     */
    data: XOR<medicamentos_actualesUpdateManyMutationInput, medicamentos_actualesUncheckedUpdateManyInput>
    /**
     * Filter which medicamentos_actuales to update
     */
    where?: medicamentos_actualesWhereInput
    /**
     * Limit how many medicamentos_actuales to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicamentos_actualesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * medicamentos_actuales upsert
   */
  export type medicamentos_actualesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicamentos_actuales
     */
    select?: medicamentos_actualesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicamentos_actuales
     */
    omit?: medicamentos_actualesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicamentos_actualesInclude<ExtArgs> | null
    /**
     * The filter to search for the medicamentos_actuales to update in case it exists.
     */
    where: medicamentos_actualesWhereUniqueInput
    /**
     * In case the medicamentos_actuales found by the `where` argument doesn't exist, create a new medicamentos_actuales with this data.
     */
    create: XOR<medicamentos_actualesCreateInput, medicamentos_actualesUncheckedCreateInput>
    /**
     * In case the medicamentos_actuales was found with the provided `where` argument, update it with this data.
     */
    update: XOR<medicamentos_actualesUpdateInput, medicamentos_actualesUncheckedUpdateInput>
  }

  /**
   * medicamentos_actuales delete
   */
  export type medicamentos_actualesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicamentos_actuales
     */
    select?: medicamentos_actualesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicamentos_actuales
     */
    omit?: medicamentos_actualesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicamentos_actualesInclude<ExtArgs> | null
    /**
     * Filter which medicamentos_actuales to delete.
     */
    where: medicamentos_actualesWhereUniqueInput
  }

  /**
   * medicamentos_actuales deleteMany
   */
  export type medicamentos_actualesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which medicamentos_actuales to delete
     */
    where?: medicamentos_actualesWhereInput
    /**
     * Limit how many medicamentos_actuales to delete.
     */
    limit?: number
  }

  /**
   * medicamentos_actuales.pacientes
   */
  export type medicamentos_actuales$pacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    where?: pacientesWhereInput
  }

  /**
   * medicamentos_actuales without action
   */
  export type medicamentos_actualesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicamentos_actuales
     */
    select?: medicamentos_actualesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicamentos_actuales
     */
    omit?: medicamentos_actualesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicamentos_actualesInclude<ExtArgs> | null
  }


  /**
   * Model pacientes
   */

  export type AggregatePacientes = {
    _count: PacientesCountAggregateOutputType | null
    _avg: PacientesAvgAggregateOutputType | null
    _sum: PacientesSumAggregateOutputType | null
    _min: PacientesMinAggregateOutputType | null
    _max: PacientesMaxAggregateOutputType | null
  }

  export type PacientesAvgAggregateOutputType = {
    id: number | null
    tipo_sangre_id: number | null
    tutor_legal_id: number | null
  }

  export type PacientesSumAggregateOutputType = {
    id: number | null
    tipo_sangre_id: number | null
    tutor_legal_id: number | null
  }

  export type PacientesMinAggregateOutputType = {
    id: number | null
    dni: string | null
    nombre: string | null
    apellido: string | null
    tipo_sangre_id: number | null
    fecha_nacimiento: Date | null
    numero_telefono: string | null
    email: string | null
    obra_social: string | null
    tutor_legal_id: number | null
  }

  export type PacientesMaxAggregateOutputType = {
    id: number | null
    dni: string | null
    nombre: string | null
    apellido: string | null
    tipo_sangre_id: number | null
    fecha_nacimiento: Date | null
    numero_telefono: string | null
    email: string | null
    obra_social: string | null
    tutor_legal_id: number | null
  }

  export type PacientesCountAggregateOutputType = {
    id: number
    dni: number
    nombre: number
    apellido: number
    tipo_sangre_id: number
    fecha_nacimiento: number
    numero_telefono: number
    email: number
    obra_social: number
    tutor_legal_id: number
    _all: number
  }


  export type PacientesAvgAggregateInputType = {
    id?: true
    tipo_sangre_id?: true
    tutor_legal_id?: true
  }

  export type PacientesSumAggregateInputType = {
    id?: true
    tipo_sangre_id?: true
    tutor_legal_id?: true
  }

  export type PacientesMinAggregateInputType = {
    id?: true
    dni?: true
    nombre?: true
    apellido?: true
    tipo_sangre_id?: true
    fecha_nacimiento?: true
    numero_telefono?: true
    email?: true
    obra_social?: true
    tutor_legal_id?: true
  }

  export type PacientesMaxAggregateInputType = {
    id?: true
    dni?: true
    nombre?: true
    apellido?: true
    tipo_sangre_id?: true
    fecha_nacimiento?: true
    numero_telefono?: true
    email?: true
    obra_social?: true
    tutor_legal_id?: true
  }

  export type PacientesCountAggregateInputType = {
    id?: true
    dni?: true
    nombre?: true
    apellido?: true
    tipo_sangre_id?: true
    fecha_nacimiento?: true
    numero_telefono?: true
    email?: true
    obra_social?: true
    tutor_legal_id?: true
    _all?: true
  }

  export type PacientesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pacientes to aggregate.
     */
    where?: pacientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pacientes to fetch.
     */
    orderBy?: pacientesOrderByWithRelationInput | pacientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pacientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pacientes
    **/
    _count?: true | PacientesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PacientesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PacientesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PacientesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PacientesMaxAggregateInputType
  }

  export type GetPacientesAggregateType<T extends PacientesAggregateArgs> = {
        [P in keyof T & keyof AggregatePacientes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePacientes[P]>
      : GetScalarType<T[P], AggregatePacientes[P]>
  }




  export type pacientesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pacientesWhereInput
    orderBy?: pacientesOrderByWithAggregationInput | pacientesOrderByWithAggregationInput[]
    by: PacientesScalarFieldEnum[] | PacientesScalarFieldEnum
    having?: pacientesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PacientesCountAggregateInputType | true
    _avg?: PacientesAvgAggregateInputType
    _sum?: PacientesSumAggregateInputType
    _min?: PacientesMinAggregateInputType
    _max?: PacientesMaxAggregateInputType
  }

  export type PacientesGroupByOutputType = {
    id: number
    dni: string
    nombre: string
    apellido: string
    tipo_sangre_id: number | null
    fecha_nacimiento: Date
    numero_telefono: string
    email: string
    obra_social: string | null
    tutor_legal_id: number | null
    _count: PacientesCountAggregateOutputType | null
    _avg: PacientesAvgAggregateOutputType | null
    _sum: PacientesSumAggregateOutputType | null
    _min: PacientesMinAggregateOutputType | null
    _max: PacientesMaxAggregateOutputType | null
  }

  type GetPacientesGroupByPayload<T extends pacientesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PacientesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PacientesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PacientesGroupByOutputType[P]>
            : GetScalarType<T[P], PacientesGroupByOutputType[P]>
        }
      >
    >


  export type pacientesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dni?: boolean
    nombre?: boolean
    apellido?: boolean
    tipo_sangre_id?: boolean
    fecha_nacimiento?: boolean
    numero_telefono?: boolean
    email?: boolean
    obra_social?: boolean
    tutor_legal_id?: boolean
    alergias?: boolean | pacientes$alergiasArgs<ExtArgs>
    consultas?: boolean | pacientes$consultasArgs<ExtArgs>
    contactos_emergencia?: boolean | pacientes$contactos_emergenciaArgs<ExtArgs>
    enfermedades?: boolean | pacientes$enfermedadesArgs<ExtArgs>
    historial_cirugias?: boolean | pacientes$historial_cirugiasArgs<ExtArgs>
    medicamentos_actuales?: boolean | pacientes$medicamentos_actualesArgs<ExtArgs>
    tipos_sangre?: boolean | pacientes$tipos_sangreArgs<ExtArgs>
    tutores_legales?: boolean | pacientes$tutores_legalesArgs<ExtArgs>
    _count?: boolean | PacientesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pacientes"]>

  export type pacientesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dni?: boolean
    nombre?: boolean
    apellido?: boolean
    tipo_sangre_id?: boolean
    fecha_nacimiento?: boolean
    numero_telefono?: boolean
    email?: boolean
    obra_social?: boolean
    tutor_legal_id?: boolean
    tipos_sangre?: boolean | pacientes$tipos_sangreArgs<ExtArgs>
    tutores_legales?: boolean | pacientes$tutores_legalesArgs<ExtArgs>
  }, ExtArgs["result"]["pacientes"]>

  export type pacientesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dni?: boolean
    nombre?: boolean
    apellido?: boolean
    tipo_sangre_id?: boolean
    fecha_nacimiento?: boolean
    numero_telefono?: boolean
    email?: boolean
    obra_social?: boolean
    tutor_legal_id?: boolean
    tipos_sangre?: boolean | pacientes$tipos_sangreArgs<ExtArgs>
    tutores_legales?: boolean | pacientes$tutores_legalesArgs<ExtArgs>
  }, ExtArgs["result"]["pacientes"]>

  export type pacientesSelectScalar = {
    id?: boolean
    dni?: boolean
    nombre?: boolean
    apellido?: boolean
    tipo_sangre_id?: boolean
    fecha_nacimiento?: boolean
    numero_telefono?: boolean
    email?: boolean
    obra_social?: boolean
    tutor_legal_id?: boolean
  }

  export type pacientesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dni" | "nombre" | "apellido" | "tipo_sangre_id" | "fecha_nacimiento" | "numero_telefono" | "email" | "obra_social" | "tutor_legal_id", ExtArgs["result"]["pacientes"]>
  export type pacientesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alergias?: boolean | pacientes$alergiasArgs<ExtArgs>
    consultas?: boolean | pacientes$consultasArgs<ExtArgs>
    contactos_emergencia?: boolean | pacientes$contactos_emergenciaArgs<ExtArgs>
    enfermedades?: boolean | pacientes$enfermedadesArgs<ExtArgs>
    historial_cirugias?: boolean | pacientes$historial_cirugiasArgs<ExtArgs>
    medicamentos_actuales?: boolean | pacientes$medicamentos_actualesArgs<ExtArgs>
    tipos_sangre?: boolean | pacientes$tipos_sangreArgs<ExtArgs>
    tutores_legales?: boolean | pacientes$tutores_legalesArgs<ExtArgs>
    _count?: boolean | PacientesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type pacientesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipos_sangre?: boolean | pacientes$tipos_sangreArgs<ExtArgs>
    tutores_legales?: boolean | pacientes$tutores_legalesArgs<ExtArgs>
  }
  export type pacientesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipos_sangre?: boolean | pacientes$tipos_sangreArgs<ExtArgs>
    tutores_legales?: boolean | pacientes$tutores_legalesArgs<ExtArgs>
  }

  export type $pacientesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pacientes"
    objects: {
      alergias: Prisma.$alergiasPayload<ExtArgs>[]
      consultas: Prisma.$consultasPayload<ExtArgs>[]
      contactos_emergencia: Prisma.$contactos_emergenciaPayload<ExtArgs>[]
      enfermedades: Prisma.$enfermedadesPayload<ExtArgs>[]
      historial_cirugias: Prisma.$historial_cirugiasPayload<ExtArgs>[]
      medicamentos_actuales: Prisma.$medicamentos_actualesPayload<ExtArgs>[]
      tipos_sangre: Prisma.$tipos_sangrePayload<ExtArgs> | null
      tutores_legales: Prisma.$tutores_legalesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dni: string
      nombre: string
      apellido: string
      tipo_sangre_id: number | null
      fecha_nacimiento: Date
      numero_telefono: string
      email: string
      obra_social: string | null
      tutor_legal_id: number | null
    }, ExtArgs["result"]["pacientes"]>
    composites: {}
  }

  type pacientesGetPayload<S extends boolean | null | undefined | pacientesDefaultArgs> = $Result.GetResult<Prisma.$pacientesPayload, S>

  type pacientesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pacientesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PacientesCountAggregateInputType | true
    }

  export interface pacientesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pacientes'], meta: { name: 'pacientes' } }
    /**
     * Find zero or one Pacientes that matches the filter.
     * @param {pacientesFindUniqueArgs} args - Arguments to find a Pacientes
     * @example
     * // Get one Pacientes
     * const pacientes = await prisma.pacientes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pacientesFindUniqueArgs>(args: SelectSubset<T, pacientesFindUniqueArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pacientes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pacientesFindUniqueOrThrowArgs} args - Arguments to find a Pacientes
     * @example
     * // Get one Pacientes
     * const pacientes = await prisma.pacientes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pacientesFindUniqueOrThrowArgs>(args: SelectSubset<T, pacientesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesFindFirstArgs} args - Arguments to find a Pacientes
     * @example
     * // Get one Pacientes
     * const pacientes = await prisma.pacientes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pacientesFindFirstArgs>(args?: SelectSubset<T, pacientesFindFirstArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pacientes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesFindFirstOrThrowArgs} args - Arguments to find a Pacientes
     * @example
     * // Get one Pacientes
     * const pacientes = await prisma.pacientes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pacientesFindFirstOrThrowArgs>(args?: SelectSubset<T, pacientesFindFirstOrThrowArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pacientes
     * const pacientes = await prisma.pacientes.findMany()
     * 
     * // Get first 10 Pacientes
     * const pacientes = await prisma.pacientes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pacientesWithIdOnly = await prisma.pacientes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pacientesFindManyArgs>(args?: SelectSubset<T, pacientesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pacientes.
     * @param {pacientesCreateArgs} args - Arguments to create a Pacientes.
     * @example
     * // Create one Pacientes
     * const Pacientes = await prisma.pacientes.create({
     *   data: {
     *     // ... data to create a Pacientes
     *   }
     * })
     * 
     */
    create<T extends pacientesCreateArgs>(args: SelectSubset<T, pacientesCreateArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pacientes.
     * @param {pacientesCreateManyArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const pacientes = await prisma.pacientes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pacientesCreateManyArgs>(args?: SelectSubset<T, pacientesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pacientes and returns the data saved in the database.
     * @param {pacientesCreateManyAndReturnArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const pacientes = await prisma.pacientes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pacientes and only return the `id`
     * const pacientesWithIdOnly = await prisma.pacientes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pacientesCreateManyAndReturnArgs>(args?: SelectSubset<T, pacientesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pacientes.
     * @param {pacientesDeleteArgs} args - Arguments to delete one Pacientes.
     * @example
     * // Delete one Pacientes
     * const Pacientes = await prisma.pacientes.delete({
     *   where: {
     *     // ... filter to delete one Pacientes
     *   }
     * })
     * 
     */
    delete<T extends pacientesDeleteArgs>(args: SelectSubset<T, pacientesDeleteArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pacientes.
     * @param {pacientesUpdateArgs} args - Arguments to update one Pacientes.
     * @example
     * // Update one Pacientes
     * const pacientes = await prisma.pacientes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pacientesUpdateArgs>(args: SelectSubset<T, pacientesUpdateArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pacientes.
     * @param {pacientesDeleteManyArgs} args - Arguments to filter Pacientes to delete.
     * @example
     * // Delete a few Pacientes
     * const { count } = await prisma.pacientes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pacientesDeleteManyArgs>(args?: SelectSubset<T, pacientesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pacientes
     * const pacientes = await prisma.pacientes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pacientesUpdateManyArgs>(args: SelectSubset<T, pacientesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes and returns the data updated in the database.
     * @param {pacientesUpdateManyAndReturnArgs} args - Arguments to update many Pacientes.
     * @example
     * // Update many Pacientes
     * const pacientes = await prisma.pacientes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pacientes and only return the `id`
     * const pacientesWithIdOnly = await prisma.pacientes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends pacientesUpdateManyAndReturnArgs>(args: SelectSubset<T, pacientesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pacientes.
     * @param {pacientesUpsertArgs} args - Arguments to update or create a Pacientes.
     * @example
     * // Update or create a Pacientes
     * const pacientes = await prisma.pacientes.upsert({
     *   create: {
     *     // ... data to create a Pacientes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pacientes we want to update
     *   }
     * })
     */
    upsert<T extends pacientesUpsertArgs>(args: SelectSubset<T, pacientesUpsertArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesCountArgs} args - Arguments to filter Pacientes to count.
     * @example
     * // Count the number of Pacientes
     * const count = await prisma.pacientes.count({
     *   where: {
     *     // ... the filter for the Pacientes we want to count
     *   }
     * })
    **/
    count<T extends pacientesCountArgs>(
      args?: Subset<T, pacientesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PacientesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacientesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PacientesAggregateArgs>(args: Subset<T, PacientesAggregateArgs>): Prisma.PrismaPromise<GetPacientesAggregateType<T>>

    /**
     * Group by Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends pacientesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pacientesGroupByArgs['orderBy'] }
        : { orderBy?: pacientesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, pacientesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPacientesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pacientes model
   */
  readonly fields: pacientesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pacientes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pacientesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alergias<T extends pacientes$alergiasArgs<ExtArgs> = {}>(args?: Subset<T, pacientes$alergiasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alergiasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    consultas<T extends pacientes$consultasArgs<ExtArgs> = {}>(args?: Subset<T, pacientes$consultasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$consultasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contactos_emergencia<T extends pacientes$contactos_emergenciaArgs<ExtArgs> = {}>(args?: Subset<T, pacientes$contactos_emergenciaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contactos_emergenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enfermedades<T extends pacientes$enfermedadesArgs<ExtArgs> = {}>(args?: Subset<T, pacientes$enfermedadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enfermedadesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historial_cirugias<T extends pacientes$historial_cirugiasArgs<ExtArgs> = {}>(args?: Subset<T, pacientes$historial_cirugiasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historial_cirugiasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    medicamentos_actuales<T extends pacientes$medicamentos_actualesArgs<ExtArgs> = {}>(args?: Subset<T, pacientes$medicamentos_actualesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medicamentos_actualesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tipos_sangre<T extends pacientes$tipos_sangreArgs<ExtArgs> = {}>(args?: Subset<T, pacientes$tipos_sangreArgs<ExtArgs>>): Prisma__tipos_sangreClient<$Result.GetResult<Prisma.$tipos_sangrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tutores_legales<T extends pacientes$tutores_legalesArgs<ExtArgs> = {}>(args?: Subset<T, pacientes$tutores_legalesArgs<ExtArgs>>): Prisma__tutores_legalesClient<$Result.GetResult<Prisma.$tutores_legalesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the pacientes model
   */
  interface pacientesFieldRefs {
    readonly id: FieldRef<"pacientes", 'Int'>
    readonly dni: FieldRef<"pacientes", 'String'>
    readonly nombre: FieldRef<"pacientes", 'String'>
    readonly apellido: FieldRef<"pacientes", 'String'>
    readonly tipo_sangre_id: FieldRef<"pacientes", 'Int'>
    readonly fecha_nacimiento: FieldRef<"pacientes", 'DateTime'>
    readonly numero_telefono: FieldRef<"pacientes", 'String'>
    readonly email: FieldRef<"pacientes", 'String'>
    readonly obra_social: FieldRef<"pacientes", 'String'>
    readonly tutor_legal_id: FieldRef<"pacientes", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * pacientes findUnique
   */
  export type pacientesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter, which pacientes to fetch.
     */
    where: pacientesWhereUniqueInput
  }

  /**
   * pacientes findUniqueOrThrow
   */
  export type pacientesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter, which pacientes to fetch.
     */
    where: pacientesWhereUniqueInput
  }

  /**
   * pacientes findFirst
   */
  export type pacientesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter, which pacientes to fetch.
     */
    where?: pacientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pacientes to fetch.
     */
    orderBy?: pacientesOrderByWithRelationInput | pacientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pacientes.
     */
    cursor?: pacientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pacientes.
     */
    distinct?: PacientesScalarFieldEnum | PacientesScalarFieldEnum[]
  }

  /**
   * pacientes findFirstOrThrow
   */
  export type pacientesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter, which pacientes to fetch.
     */
    where?: pacientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pacientes to fetch.
     */
    orderBy?: pacientesOrderByWithRelationInput | pacientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pacientes.
     */
    cursor?: pacientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pacientes.
     */
    distinct?: PacientesScalarFieldEnum | PacientesScalarFieldEnum[]
  }

  /**
   * pacientes findMany
   */
  export type pacientesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter, which pacientes to fetch.
     */
    where?: pacientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pacientes to fetch.
     */
    orderBy?: pacientesOrderByWithRelationInput | pacientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pacientes.
     */
    cursor?: pacientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pacientes.
     */
    skip?: number
    distinct?: PacientesScalarFieldEnum | PacientesScalarFieldEnum[]
  }

  /**
   * pacientes create
   */
  export type pacientesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * The data needed to create a pacientes.
     */
    data: XOR<pacientesCreateInput, pacientesUncheckedCreateInput>
  }

  /**
   * pacientes createMany
   */
  export type pacientesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pacientes.
     */
    data: pacientesCreateManyInput | pacientesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pacientes createManyAndReturn
   */
  export type pacientesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * The data used to create many pacientes.
     */
    data: pacientesCreateManyInput | pacientesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pacientes update
   */
  export type pacientesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * The data needed to update a pacientes.
     */
    data: XOR<pacientesUpdateInput, pacientesUncheckedUpdateInput>
    /**
     * Choose, which pacientes to update.
     */
    where: pacientesWhereUniqueInput
  }

  /**
   * pacientes updateMany
   */
  export type pacientesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pacientes.
     */
    data: XOR<pacientesUpdateManyMutationInput, pacientesUncheckedUpdateManyInput>
    /**
     * Filter which pacientes to update
     */
    where?: pacientesWhereInput
    /**
     * Limit how many pacientes to update.
     */
    limit?: number
  }

  /**
   * pacientes updateManyAndReturn
   */
  export type pacientesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * The data used to update pacientes.
     */
    data: XOR<pacientesUpdateManyMutationInput, pacientesUncheckedUpdateManyInput>
    /**
     * Filter which pacientes to update
     */
    where?: pacientesWhereInput
    /**
     * Limit how many pacientes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pacientes upsert
   */
  export type pacientesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * The filter to search for the pacientes to update in case it exists.
     */
    where: pacientesWhereUniqueInput
    /**
     * In case the pacientes found by the `where` argument doesn't exist, create a new pacientes with this data.
     */
    create: XOR<pacientesCreateInput, pacientesUncheckedCreateInput>
    /**
     * In case the pacientes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pacientesUpdateInput, pacientesUncheckedUpdateInput>
  }

  /**
   * pacientes delete
   */
  export type pacientesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter which pacientes to delete.
     */
    where: pacientesWhereUniqueInput
  }

  /**
   * pacientes deleteMany
   */
  export type pacientesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pacientes to delete
     */
    where?: pacientesWhereInput
    /**
     * Limit how many pacientes to delete.
     */
    limit?: number
  }

  /**
   * pacientes.alergias
   */
  export type pacientes$alergiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alergias
     */
    select?: alergiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alergias
     */
    omit?: alergiasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alergiasInclude<ExtArgs> | null
    where?: alergiasWhereInput
    orderBy?: alergiasOrderByWithRelationInput | alergiasOrderByWithRelationInput[]
    cursor?: alergiasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlergiasScalarFieldEnum | AlergiasScalarFieldEnum[]
  }

  /**
   * pacientes.consultas
   */
  export type pacientes$consultasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consultas
     */
    select?: consultasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the consultas
     */
    omit?: consultasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consultasInclude<ExtArgs> | null
    where?: consultasWhereInput
    orderBy?: consultasOrderByWithRelationInput | consultasOrderByWithRelationInput[]
    cursor?: consultasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultasScalarFieldEnum | ConsultasScalarFieldEnum[]
  }

  /**
   * pacientes.contactos_emergencia
   */
  export type pacientes$contactos_emergenciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactos_emergencia
     */
    select?: contactos_emergenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactos_emergencia
     */
    omit?: contactos_emergenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactos_emergenciaInclude<ExtArgs> | null
    where?: contactos_emergenciaWhereInput
    orderBy?: contactos_emergenciaOrderByWithRelationInput | contactos_emergenciaOrderByWithRelationInput[]
    cursor?: contactos_emergenciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Contactos_emergenciaScalarFieldEnum | Contactos_emergenciaScalarFieldEnum[]
  }

  /**
   * pacientes.enfermedades
   */
  export type pacientes$enfermedadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enfermedades
     */
    select?: enfermedadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enfermedades
     */
    omit?: enfermedadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enfermedadesInclude<ExtArgs> | null
    where?: enfermedadesWhereInput
    orderBy?: enfermedadesOrderByWithRelationInput | enfermedadesOrderByWithRelationInput[]
    cursor?: enfermedadesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnfermedadesScalarFieldEnum | EnfermedadesScalarFieldEnum[]
  }

  /**
   * pacientes.historial_cirugias
   */
  export type pacientes$historial_cirugiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_cirugias
     */
    select?: historial_cirugiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_cirugias
     */
    omit?: historial_cirugiasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_cirugiasInclude<ExtArgs> | null
    where?: historial_cirugiasWhereInput
    orderBy?: historial_cirugiasOrderByWithRelationInput | historial_cirugiasOrderByWithRelationInput[]
    cursor?: historial_cirugiasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Historial_cirugiasScalarFieldEnum | Historial_cirugiasScalarFieldEnum[]
  }

  /**
   * pacientes.medicamentos_actuales
   */
  export type pacientes$medicamentos_actualesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicamentos_actuales
     */
    select?: medicamentos_actualesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicamentos_actuales
     */
    omit?: medicamentos_actualesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicamentos_actualesInclude<ExtArgs> | null
    where?: medicamentos_actualesWhereInput
    orderBy?: medicamentos_actualesOrderByWithRelationInput | medicamentos_actualesOrderByWithRelationInput[]
    cursor?: medicamentos_actualesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Medicamentos_actualesScalarFieldEnum | Medicamentos_actualesScalarFieldEnum[]
  }

  /**
   * pacientes.tipos_sangre
   */
  export type pacientes$tipos_sangreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipos_sangre
     */
    select?: tipos_sangreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipos_sangre
     */
    omit?: tipos_sangreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipos_sangreInclude<ExtArgs> | null
    where?: tipos_sangreWhereInput
  }

  /**
   * pacientes.tutores_legales
   */
  export type pacientes$tutores_legalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutores_legales
     */
    select?: tutores_legalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutores_legales
     */
    omit?: tutores_legalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutores_legalesInclude<ExtArgs> | null
    where?: tutores_legalesWhereInput
  }

  /**
   * pacientes without action
   */
  export type pacientesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
  }


  /**
   * Model tipos_sangre
   */

  export type AggregateTipos_sangre = {
    _count: Tipos_sangreCountAggregateOutputType | null
    _avg: Tipos_sangreAvgAggregateOutputType | null
    _sum: Tipos_sangreSumAggregateOutputType | null
    _min: Tipos_sangreMinAggregateOutputType | null
    _max: Tipos_sangreMaxAggregateOutputType | null
  }

  export type Tipos_sangreAvgAggregateOutputType = {
    id: number | null
  }

  export type Tipos_sangreSumAggregateOutputType = {
    id: number | null
  }

  export type Tipos_sangreMinAggregateOutputType = {
    id: number | null
    tipo: string | null
  }

  export type Tipos_sangreMaxAggregateOutputType = {
    id: number | null
    tipo: string | null
  }

  export type Tipos_sangreCountAggregateOutputType = {
    id: number
    tipo: number
    _all: number
  }


  export type Tipos_sangreAvgAggregateInputType = {
    id?: true
  }

  export type Tipos_sangreSumAggregateInputType = {
    id?: true
  }

  export type Tipos_sangreMinAggregateInputType = {
    id?: true
    tipo?: true
  }

  export type Tipos_sangreMaxAggregateInputType = {
    id?: true
    tipo?: true
  }

  export type Tipos_sangreCountAggregateInputType = {
    id?: true
    tipo?: true
    _all?: true
  }

  export type Tipos_sangreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipos_sangre to aggregate.
     */
    where?: tipos_sangreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipos_sangres to fetch.
     */
    orderBy?: tipos_sangreOrderByWithRelationInput | tipos_sangreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tipos_sangreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipos_sangres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipos_sangres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tipos_sangres
    **/
    _count?: true | Tipos_sangreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tipos_sangreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tipos_sangreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tipos_sangreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tipos_sangreMaxAggregateInputType
  }

  export type GetTipos_sangreAggregateType<T extends Tipos_sangreAggregateArgs> = {
        [P in keyof T & keyof AggregateTipos_sangre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipos_sangre[P]>
      : GetScalarType<T[P], AggregateTipos_sangre[P]>
  }




  export type tipos_sangreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tipos_sangreWhereInput
    orderBy?: tipos_sangreOrderByWithAggregationInput | tipos_sangreOrderByWithAggregationInput[]
    by: Tipos_sangreScalarFieldEnum[] | Tipos_sangreScalarFieldEnum
    having?: tipos_sangreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tipos_sangreCountAggregateInputType | true
    _avg?: Tipos_sangreAvgAggregateInputType
    _sum?: Tipos_sangreSumAggregateInputType
    _min?: Tipos_sangreMinAggregateInputType
    _max?: Tipos_sangreMaxAggregateInputType
  }

  export type Tipos_sangreGroupByOutputType = {
    id: number
    tipo: string
    _count: Tipos_sangreCountAggregateOutputType | null
    _avg: Tipos_sangreAvgAggregateOutputType | null
    _sum: Tipos_sangreSumAggregateOutputType | null
    _min: Tipos_sangreMinAggregateOutputType | null
    _max: Tipos_sangreMaxAggregateOutputType | null
  }

  type GetTipos_sangreGroupByPayload<T extends tipos_sangreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tipos_sangreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tipos_sangreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tipos_sangreGroupByOutputType[P]>
            : GetScalarType<T[P], Tipos_sangreGroupByOutputType[P]>
        }
      >
    >


  export type tipos_sangreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    pacientes?: boolean | tipos_sangre$pacientesArgs<ExtArgs>
    _count?: boolean | Tipos_sangreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipos_sangre"]>

  export type tipos_sangreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
  }, ExtArgs["result"]["tipos_sangre"]>

  export type tipos_sangreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
  }, ExtArgs["result"]["tipos_sangre"]>

  export type tipos_sangreSelectScalar = {
    id?: boolean
    tipo?: boolean
  }

  export type tipos_sangreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo", ExtArgs["result"]["tipos_sangre"]>
  export type tipos_sangreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | tipos_sangre$pacientesArgs<ExtArgs>
    _count?: boolean | Tipos_sangreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tipos_sangreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tipos_sangreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tipos_sangrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tipos_sangre"
    objects: {
      pacientes: Prisma.$pacientesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipo: string
    }, ExtArgs["result"]["tipos_sangre"]>
    composites: {}
  }

  type tipos_sangreGetPayload<S extends boolean | null | undefined | tipos_sangreDefaultArgs> = $Result.GetResult<Prisma.$tipos_sangrePayload, S>

  type tipos_sangreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tipos_sangreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tipos_sangreCountAggregateInputType | true
    }

  export interface tipos_sangreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tipos_sangre'], meta: { name: 'tipos_sangre' } }
    /**
     * Find zero or one Tipos_sangre that matches the filter.
     * @param {tipos_sangreFindUniqueArgs} args - Arguments to find a Tipos_sangre
     * @example
     * // Get one Tipos_sangre
     * const tipos_sangre = await prisma.tipos_sangre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tipos_sangreFindUniqueArgs>(args: SelectSubset<T, tipos_sangreFindUniqueArgs<ExtArgs>>): Prisma__tipos_sangreClient<$Result.GetResult<Prisma.$tipos_sangrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tipos_sangre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tipos_sangreFindUniqueOrThrowArgs} args - Arguments to find a Tipos_sangre
     * @example
     * // Get one Tipos_sangre
     * const tipos_sangre = await prisma.tipos_sangre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tipos_sangreFindUniqueOrThrowArgs>(args: SelectSubset<T, tipos_sangreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tipos_sangreClient<$Result.GetResult<Prisma.$tipos_sangrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipos_sangre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipos_sangreFindFirstArgs} args - Arguments to find a Tipos_sangre
     * @example
     * // Get one Tipos_sangre
     * const tipos_sangre = await prisma.tipos_sangre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tipos_sangreFindFirstArgs>(args?: SelectSubset<T, tipos_sangreFindFirstArgs<ExtArgs>>): Prisma__tipos_sangreClient<$Result.GetResult<Prisma.$tipos_sangrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipos_sangre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipos_sangreFindFirstOrThrowArgs} args - Arguments to find a Tipos_sangre
     * @example
     * // Get one Tipos_sangre
     * const tipos_sangre = await prisma.tipos_sangre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tipos_sangreFindFirstOrThrowArgs>(args?: SelectSubset<T, tipos_sangreFindFirstOrThrowArgs<ExtArgs>>): Prisma__tipos_sangreClient<$Result.GetResult<Prisma.$tipos_sangrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tipos_sangres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipos_sangreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tipos_sangres
     * const tipos_sangres = await prisma.tipos_sangre.findMany()
     * 
     * // Get first 10 Tipos_sangres
     * const tipos_sangres = await prisma.tipos_sangre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipos_sangreWithIdOnly = await prisma.tipos_sangre.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tipos_sangreFindManyArgs>(args?: SelectSubset<T, tipos_sangreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipos_sangrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tipos_sangre.
     * @param {tipos_sangreCreateArgs} args - Arguments to create a Tipos_sangre.
     * @example
     * // Create one Tipos_sangre
     * const Tipos_sangre = await prisma.tipos_sangre.create({
     *   data: {
     *     // ... data to create a Tipos_sangre
     *   }
     * })
     * 
     */
    create<T extends tipos_sangreCreateArgs>(args: SelectSubset<T, tipos_sangreCreateArgs<ExtArgs>>): Prisma__tipos_sangreClient<$Result.GetResult<Prisma.$tipos_sangrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tipos_sangres.
     * @param {tipos_sangreCreateManyArgs} args - Arguments to create many Tipos_sangres.
     * @example
     * // Create many Tipos_sangres
     * const tipos_sangre = await prisma.tipos_sangre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tipos_sangreCreateManyArgs>(args?: SelectSubset<T, tipos_sangreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tipos_sangres and returns the data saved in the database.
     * @param {tipos_sangreCreateManyAndReturnArgs} args - Arguments to create many Tipos_sangres.
     * @example
     * // Create many Tipos_sangres
     * const tipos_sangre = await prisma.tipos_sangre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tipos_sangres and only return the `id`
     * const tipos_sangreWithIdOnly = await prisma.tipos_sangre.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tipos_sangreCreateManyAndReturnArgs>(args?: SelectSubset<T, tipos_sangreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipos_sangrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tipos_sangre.
     * @param {tipos_sangreDeleteArgs} args - Arguments to delete one Tipos_sangre.
     * @example
     * // Delete one Tipos_sangre
     * const Tipos_sangre = await prisma.tipos_sangre.delete({
     *   where: {
     *     // ... filter to delete one Tipos_sangre
     *   }
     * })
     * 
     */
    delete<T extends tipos_sangreDeleteArgs>(args: SelectSubset<T, tipos_sangreDeleteArgs<ExtArgs>>): Prisma__tipos_sangreClient<$Result.GetResult<Prisma.$tipos_sangrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tipos_sangre.
     * @param {tipos_sangreUpdateArgs} args - Arguments to update one Tipos_sangre.
     * @example
     * // Update one Tipos_sangre
     * const tipos_sangre = await prisma.tipos_sangre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tipos_sangreUpdateArgs>(args: SelectSubset<T, tipos_sangreUpdateArgs<ExtArgs>>): Prisma__tipos_sangreClient<$Result.GetResult<Prisma.$tipos_sangrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tipos_sangres.
     * @param {tipos_sangreDeleteManyArgs} args - Arguments to filter Tipos_sangres to delete.
     * @example
     * // Delete a few Tipos_sangres
     * const { count } = await prisma.tipos_sangre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tipos_sangreDeleteManyArgs>(args?: SelectSubset<T, tipos_sangreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipos_sangres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipos_sangreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tipos_sangres
     * const tipos_sangre = await prisma.tipos_sangre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tipos_sangreUpdateManyArgs>(args: SelectSubset<T, tipos_sangreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipos_sangres and returns the data updated in the database.
     * @param {tipos_sangreUpdateManyAndReturnArgs} args - Arguments to update many Tipos_sangres.
     * @example
     * // Update many Tipos_sangres
     * const tipos_sangre = await prisma.tipos_sangre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tipos_sangres and only return the `id`
     * const tipos_sangreWithIdOnly = await prisma.tipos_sangre.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tipos_sangreUpdateManyAndReturnArgs>(args: SelectSubset<T, tipos_sangreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipos_sangrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tipos_sangre.
     * @param {tipos_sangreUpsertArgs} args - Arguments to update or create a Tipos_sangre.
     * @example
     * // Update or create a Tipos_sangre
     * const tipos_sangre = await prisma.tipos_sangre.upsert({
     *   create: {
     *     // ... data to create a Tipos_sangre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tipos_sangre we want to update
     *   }
     * })
     */
    upsert<T extends tipos_sangreUpsertArgs>(args: SelectSubset<T, tipos_sangreUpsertArgs<ExtArgs>>): Prisma__tipos_sangreClient<$Result.GetResult<Prisma.$tipos_sangrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tipos_sangres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipos_sangreCountArgs} args - Arguments to filter Tipos_sangres to count.
     * @example
     * // Count the number of Tipos_sangres
     * const count = await prisma.tipos_sangre.count({
     *   where: {
     *     // ... the filter for the Tipos_sangres we want to count
     *   }
     * })
    **/
    count<T extends tipos_sangreCountArgs>(
      args?: Subset<T, tipos_sangreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tipos_sangreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tipos_sangre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tipos_sangreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tipos_sangreAggregateArgs>(args: Subset<T, Tipos_sangreAggregateArgs>): Prisma.PrismaPromise<GetTipos_sangreAggregateType<T>>

    /**
     * Group by Tipos_sangre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipos_sangreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tipos_sangreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tipos_sangreGroupByArgs['orderBy'] }
        : { orderBy?: tipos_sangreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tipos_sangreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipos_sangreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tipos_sangre model
   */
  readonly fields: tipos_sangreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tipos_sangre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tipos_sangreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pacientes<T extends tipos_sangre$pacientesArgs<ExtArgs> = {}>(args?: Subset<T, tipos_sangre$pacientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tipos_sangre model
   */
  interface tipos_sangreFieldRefs {
    readonly id: FieldRef<"tipos_sangre", 'Int'>
    readonly tipo: FieldRef<"tipos_sangre", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tipos_sangre findUnique
   */
  export type tipos_sangreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipos_sangre
     */
    select?: tipos_sangreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipos_sangre
     */
    omit?: tipos_sangreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipos_sangreInclude<ExtArgs> | null
    /**
     * Filter, which tipos_sangre to fetch.
     */
    where: tipos_sangreWhereUniqueInput
  }

  /**
   * tipos_sangre findUniqueOrThrow
   */
  export type tipos_sangreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipos_sangre
     */
    select?: tipos_sangreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipos_sangre
     */
    omit?: tipos_sangreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipos_sangreInclude<ExtArgs> | null
    /**
     * Filter, which tipos_sangre to fetch.
     */
    where: tipos_sangreWhereUniqueInput
  }

  /**
   * tipos_sangre findFirst
   */
  export type tipos_sangreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipos_sangre
     */
    select?: tipos_sangreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipos_sangre
     */
    omit?: tipos_sangreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipos_sangreInclude<ExtArgs> | null
    /**
     * Filter, which tipos_sangre to fetch.
     */
    where?: tipos_sangreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipos_sangres to fetch.
     */
    orderBy?: tipos_sangreOrderByWithRelationInput | tipos_sangreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipos_sangres.
     */
    cursor?: tipos_sangreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipos_sangres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipos_sangres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipos_sangres.
     */
    distinct?: Tipos_sangreScalarFieldEnum | Tipos_sangreScalarFieldEnum[]
  }

  /**
   * tipos_sangre findFirstOrThrow
   */
  export type tipos_sangreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipos_sangre
     */
    select?: tipos_sangreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipos_sangre
     */
    omit?: tipos_sangreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipos_sangreInclude<ExtArgs> | null
    /**
     * Filter, which tipos_sangre to fetch.
     */
    where?: tipos_sangreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipos_sangres to fetch.
     */
    orderBy?: tipos_sangreOrderByWithRelationInput | tipos_sangreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipos_sangres.
     */
    cursor?: tipos_sangreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipos_sangres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipos_sangres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipos_sangres.
     */
    distinct?: Tipos_sangreScalarFieldEnum | Tipos_sangreScalarFieldEnum[]
  }

  /**
   * tipos_sangre findMany
   */
  export type tipos_sangreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipos_sangre
     */
    select?: tipos_sangreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipos_sangre
     */
    omit?: tipos_sangreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipos_sangreInclude<ExtArgs> | null
    /**
     * Filter, which tipos_sangres to fetch.
     */
    where?: tipos_sangreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipos_sangres to fetch.
     */
    orderBy?: tipos_sangreOrderByWithRelationInput | tipos_sangreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tipos_sangres.
     */
    cursor?: tipos_sangreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipos_sangres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipos_sangres.
     */
    skip?: number
    distinct?: Tipos_sangreScalarFieldEnum | Tipos_sangreScalarFieldEnum[]
  }

  /**
   * tipos_sangre create
   */
  export type tipos_sangreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipos_sangre
     */
    select?: tipos_sangreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipos_sangre
     */
    omit?: tipos_sangreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipos_sangreInclude<ExtArgs> | null
    /**
     * The data needed to create a tipos_sangre.
     */
    data: XOR<tipos_sangreCreateInput, tipos_sangreUncheckedCreateInput>
  }

  /**
   * tipos_sangre createMany
   */
  export type tipos_sangreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tipos_sangres.
     */
    data: tipos_sangreCreateManyInput | tipos_sangreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tipos_sangre createManyAndReturn
   */
  export type tipos_sangreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipos_sangre
     */
    select?: tipos_sangreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tipos_sangre
     */
    omit?: tipos_sangreOmit<ExtArgs> | null
    /**
     * The data used to create many tipos_sangres.
     */
    data: tipos_sangreCreateManyInput | tipos_sangreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tipos_sangre update
   */
  export type tipos_sangreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipos_sangre
     */
    select?: tipos_sangreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipos_sangre
     */
    omit?: tipos_sangreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipos_sangreInclude<ExtArgs> | null
    /**
     * The data needed to update a tipos_sangre.
     */
    data: XOR<tipos_sangreUpdateInput, tipos_sangreUncheckedUpdateInput>
    /**
     * Choose, which tipos_sangre to update.
     */
    where: tipos_sangreWhereUniqueInput
  }

  /**
   * tipos_sangre updateMany
   */
  export type tipos_sangreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tipos_sangres.
     */
    data: XOR<tipos_sangreUpdateManyMutationInput, tipos_sangreUncheckedUpdateManyInput>
    /**
     * Filter which tipos_sangres to update
     */
    where?: tipos_sangreWhereInput
    /**
     * Limit how many tipos_sangres to update.
     */
    limit?: number
  }

  /**
   * tipos_sangre updateManyAndReturn
   */
  export type tipos_sangreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipos_sangre
     */
    select?: tipos_sangreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tipos_sangre
     */
    omit?: tipos_sangreOmit<ExtArgs> | null
    /**
     * The data used to update tipos_sangres.
     */
    data: XOR<tipos_sangreUpdateManyMutationInput, tipos_sangreUncheckedUpdateManyInput>
    /**
     * Filter which tipos_sangres to update
     */
    where?: tipos_sangreWhereInput
    /**
     * Limit how many tipos_sangres to update.
     */
    limit?: number
  }

  /**
   * tipos_sangre upsert
   */
  export type tipos_sangreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipos_sangre
     */
    select?: tipos_sangreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipos_sangre
     */
    omit?: tipos_sangreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipos_sangreInclude<ExtArgs> | null
    /**
     * The filter to search for the tipos_sangre to update in case it exists.
     */
    where: tipos_sangreWhereUniqueInput
    /**
     * In case the tipos_sangre found by the `where` argument doesn't exist, create a new tipos_sangre with this data.
     */
    create: XOR<tipos_sangreCreateInput, tipos_sangreUncheckedCreateInput>
    /**
     * In case the tipos_sangre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tipos_sangreUpdateInput, tipos_sangreUncheckedUpdateInput>
  }

  /**
   * tipos_sangre delete
   */
  export type tipos_sangreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipos_sangre
     */
    select?: tipos_sangreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipos_sangre
     */
    omit?: tipos_sangreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipos_sangreInclude<ExtArgs> | null
    /**
     * Filter which tipos_sangre to delete.
     */
    where: tipos_sangreWhereUniqueInput
  }

  /**
   * tipos_sangre deleteMany
   */
  export type tipos_sangreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipos_sangres to delete
     */
    where?: tipos_sangreWhereInput
    /**
     * Limit how many tipos_sangres to delete.
     */
    limit?: number
  }

  /**
   * tipos_sangre.pacientes
   */
  export type tipos_sangre$pacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    where?: pacientesWhereInput
    orderBy?: pacientesOrderByWithRelationInput | pacientesOrderByWithRelationInput[]
    cursor?: pacientesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PacientesScalarFieldEnum | PacientesScalarFieldEnum[]
  }

  /**
   * tipos_sangre without action
   */
  export type tipos_sangreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipos_sangre
     */
    select?: tipos_sangreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipos_sangre
     */
    omit?: tipos_sangreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipos_sangreInclude<ExtArgs> | null
  }


  /**
   * Model tutores_legales
   */

  export type AggregateTutores_legales = {
    _count: Tutores_legalesCountAggregateOutputType | null
    _avg: Tutores_legalesAvgAggregateOutputType | null
    _sum: Tutores_legalesSumAggregateOutputType | null
    _min: Tutores_legalesMinAggregateOutputType | null
    _max: Tutores_legalesMaxAggregateOutputType | null
  }

  export type Tutores_legalesAvgAggregateOutputType = {
    id: number | null
  }

  export type Tutores_legalesSumAggregateOutputType = {
    id: number | null
  }

  export type Tutores_legalesMinAggregateOutputType = {
    id: number | null
    dni: string | null
    nombre: string | null
    apellido: string | null
    telefono: string | null
    direccion: string | null
  }

  export type Tutores_legalesMaxAggregateOutputType = {
    id: number | null
    dni: string | null
    nombre: string | null
    apellido: string | null
    telefono: string | null
    direccion: string | null
  }

  export type Tutores_legalesCountAggregateOutputType = {
    id: number
    dni: number
    nombre: number
    apellido: number
    telefono: number
    direccion: number
    _all: number
  }


  export type Tutores_legalesAvgAggregateInputType = {
    id?: true
  }

  export type Tutores_legalesSumAggregateInputType = {
    id?: true
  }

  export type Tutores_legalesMinAggregateInputType = {
    id?: true
    dni?: true
    nombre?: true
    apellido?: true
    telefono?: true
    direccion?: true
  }

  export type Tutores_legalesMaxAggregateInputType = {
    id?: true
    dni?: true
    nombre?: true
    apellido?: true
    telefono?: true
    direccion?: true
  }

  export type Tutores_legalesCountAggregateInputType = {
    id?: true
    dni?: true
    nombre?: true
    apellido?: true
    telefono?: true
    direccion?: true
    _all?: true
  }

  export type Tutores_legalesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tutores_legales to aggregate.
     */
    where?: tutores_legalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tutores_legales to fetch.
     */
    orderBy?: tutores_legalesOrderByWithRelationInput | tutores_legalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tutores_legalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tutores_legales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tutores_legales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tutores_legales
    **/
    _count?: true | Tutores_legalesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tutores_legalesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tutores_legalesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tutores_legalesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tutores_legalesMaxAggregateInputType
  }

  export type GetTutores_legalesAggregateType<T extends Tutores_legalesAggregateArgs> = {
        [P in keyof T & keyof AggregateTutores_legales]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTutores_legales[P]>
      : GetScalarType<T[P], AggregateTutores_legales[P]>
  }




  export type tutores_legalesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tutores_legalesWhereInput
    orderBy?: tutores_legalesOrderByWithAggregationInput | tutores_legalesOrderByWithAggregationInput[]
    by: Tutores_legalesScalarFieldEnum[] | Tutores_legalesScalarFieldEnum
    having?: tutores_legalesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tutores_legalesCountAggregateInputType | true
    _avg?: Tutores_legalesAvgAggregateInputType
    _sum?: Tutores_legalesSumAggregateInputType
    _min?: Tutores_legalesMinAggregateInputType
    _max?: Tutores_legalesMaxAggregateInputType
  }

  export type Tutores_legalesGroupByOutputType = {
    id: number
    dni: string
    nombre: string
    apellido: string
    telefono: string | null
    direccion: string | null
    _count: Tutores_legalesCountAggregateOutputType | null
    _avg: Tutores_legalesAvgAggregateOutputType | null
    _sum: Tutores_legalesSumAggregateOutputType | null
    _min: Tutores_legalesMinAggregateOutputType | null
    _max: Tutores_legalesMaxAggregateOutputType | null
  }

  type GetTutores_legalesGroupByPayload<T extends tutores_legalesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tutores_legalesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tutores_legalesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tutores_legalesGroupByOutputType[P]>
            : GetScalarType<T[P], Tutores_legalesGroupByOutputType[P]>
        }
      >
    >


  export type tutores_legalesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dni?: boolean
    nombre?: boolean
    apellido?: boolean
    telefono?: boolean
    direccion?: boolean
    pacientes?: boolean | tutores_legales$pacientesArgs<ExtArgs>
    _count?: boolean | Tutores_legalesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutores_legales"]>

  export type tutores_legalesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dni?: boolean
    nombre?: boolean
    apellido?: boolean
    telefono?: boolean
    direccion?: boolean
  }, ExtArgs["result"]["tutores_legales"]>

  export type tutores_legalesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dni?: boolean
    nombre?: boolean
    apellido?: boolean
    telefono?: boolean
    direccion?: boolean
  }, ExtArgs["result"]["tutores_legales"]>

  export type tutores_legalesSelectScalar = {
    id?: boolean
    dni?: boolean
    nombre?: boolean
    apellido?: boolean
    telefono?: boolean
    direccion?: boolean
  }

  export type tutores_legalesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dni" | "nombre" | "apellido" | "telefono" | "direccion", ExtArgs["result"]["tutores_legales"]>
  export type tutores_legalesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | tutores_legales$pacientesArgs<ExtArgs>
    _count?: boolean | Tutores_legalesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tutores_legalesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tutores_legalesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tutores_legalesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tutores_legales"
    objects: {
      pacientes: Prisma.$pacientesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dni: string
      nombre: string
      apellido: string
      telefono: string | null
      direccion: string | null
    }, ExtArgs["result"]["tutores_legales"]>
    composites: {}
  }

  type tutores_legalesGetPayload<S extends boolean | null | undefined | tutores_legalesDefaultArgs> = $Result.GetResult<Prisma.$tutores_legalesPayload, S>

  type tutores_legalesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tutores_legalesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tutores_legalesCountAggregateInputType | true
    }

  export interface tutores_legalesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tutores_legales'], meta: { name: 'tutores_legales' } }
    /**
     * Find zero or one Tutores_legales that matches the filter.
     * @param {tutores_legalesFindUniqueArgs} args - Arguments to find a Tutores_legales
     * @example
     * // Get one Tutores_legales
     * const tutores_legales = await prisma.tutores_legales.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tutores_legalesFindUniqueArgs>(args: SelectSubset<T, tutores_legalesFindUniqueArgs<ExtArgs>>): Prisma__tutores_legalesClient<$Result.GetResult<Prisma.$tutores_legalesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tutores_legales that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tutores_legalesFindUniqueOrThrowArgs} args - Arguments to find a Tutores_legales
     * @example
     * // Get one Tutores_legales
     * const tutores_legales = await prisma.tutores_legales.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tutores_legalesFindUniqueOrThrowArgs>(args: SelectSubset<T, tutores_legalesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tutores_legalesClient<$Result.GetResult<Prisma.$tutores_legalesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tutores_legales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutores_legalesFindFirstArgs} args - Arguments to find a Tutores_legales
     * @example
     * // Get one Tutores_legales
     * const tutores_legales = await prisma.tutores_legales.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tutores_legalesFindFirstArgs>(args?: SelectSubset<T, tutores_legalesFindFirstArgs<ExtArgs>>): Prisma__tutores_legalesClient<$Result.GetResult<Prisma.$tutores_legalesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tutores_legales that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutores_legalesFindFirstOrThrowArgs} args - Arguments to find a Tutores_legales
     * @example
     * // Get one Tutores_legales
     * const tutores_legales = await prisma.tutores_legales.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tutores_legalesFindFirstOrThrowArgs>(args?: SelectSubset<T, tutores_legalesFindFirstOrThrowArgs<ExtArgs>>): Prisma__tutores_legalesClient<$Result.GetResult<Prisma.$tutores_legalesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tutores_legales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutores_legalesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tutores_legales
     * const tutores_legales = await prisma.tutores_legales.findMany()
     * 
     * // Get first 10 Tutores_legales
     * const tutores_legales = await prisma.tutores_legales.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tutores_legalesWithIdOnly = await prisma.tutores_legales.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tutores_legalesFindManyArgs>(args?: SelectSubset<T, tutores_legalesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tutores_legalesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tutores_legales.
     * @param {tutores_legalesCreateArgs} args - Arguments to create a Tutores_legales.
     * @example
     * // Create one Tutores_legales
     * const Tutores_legales = await prisma.tutores_legales.create({
     *   data: {
     *     // ... data to create a Tutores_legales
     *   }
     * })
     * 
     */
    create<T extends tutores_legalesCreateArgs>(args: SelectSubset<T, tutores_legalesCreateArgs<ExtArgs>>): Prisma__tutores_legalesClient<$Result.GetResult<Prisma.$tutores_legalesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tutores_legales.
     * @param {tutores_legalesCreateManyArgs} args - Arguments to create many Tutores_legales.
     * @example
     * // Create many Tutores_legales
     * const tutores_legales = await prisma.tutores_legales.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tutores_legalesCreateManyArgs>(args?: SelectSubset<T, tutores_legalesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tutores_legales and returns the data saved in the database.
     * @param {tutores_legalesCreateManyAndReturnArgs} args - Arguments to create many Tutores_legales.
     * @example
     * // Create many Tutores_legales
     * const tutores_legales = await prisma.tutores_legales.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tutores_legales and only return the `id`
     * const tutores_legalesWithIdOnly = await prisma.tutores_legales.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tutores_legalesCreateManyAndReturnArgs>(args?: SelectSubset<T, tutores_legalesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tutores_legalesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tutores_legales.
     * @param {tutores_legalesDeleteArgs} args - Arguments to delete one Tutores_legales.
     * @example
     * // Delete one Tutores_legales
     * const Tutores_legales = await prisma.tutores_legales.delete({
     *   where: {
     *     // ... filter to delete one Tutores_legales
     *   }
     * })
     * 
     */
    delete<T extends tutores_legalesDeleteArgs>(args: SelectSubset<T, tutores_legalesDeleteArgs<ExtArgs>>): Prisma__tutores_legalesClient<$Result.GetResult<Prisma.$tutores_legalesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tutores_legales.
     * @param {tutores_legalesUpdateArgs} args - Arguments to update one Tutores_legales.
     * @example
     * // Update one Tutores_legales
     * const tutores_legales = await prisma.tutores_legales.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tutores_legalesUpdateArgs>(args: SelectSubset<T, tutores_legalesUpdateArgs<ExtArgs>>): Prisma__tutores_legalesClient<$Result.GetResult<Prisma.$tutores_legalesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tutores_legales.
     * @param {tutores_legalesDeleteManyArgs} args - Arguments to filter Tutores_legales to delete.
     * @example
     * // Delete a few Tutores_legales
     * const { count } = await prisma.tutores_legales.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tutores_legalesDeleteManyArgs>(args?: SelectSubset<T, tutores_legalesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tutores_legales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutores_legalesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tutores_legales
     * const tutores_legales = await prisma.tutores_legales.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tutores_legalesUpdateManyArgs>(args: SelectSubset<T, tutores_legalesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tutores_legales and returns the data updated in the database.
     * @param {tutores_legalesUpdateManyAndReturnArgs} args - Arguments to update many Tutores_legales.
     * @example
     * // Update many Tutores_legales
     * const tutores_legales = await prisma.tutores_legales.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tutores_legales and only return the `id`
     * const tutores_legalesWithIdOnly = await prisma.tutores_legales.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tutores_legalesUpdateManyAndReturnArgs>(args: SelectSubset<T, tutores_legalesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tutores_legalesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tutores_legales.
     * @param {tutores_legalesUpsertArgs} args - Arguments to update or create a Tutores_legales.
     * @example
     * // Update or create a Tutores_legales
     * const tutores_legales = await prisma.tutores_legales.upsert({
     *   create: {
     *     // ... data to create a Tutores_legales
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tutores_legales we want to update
     *   }
     * })
     */
    upsert<T extends tutores_legalesUpsertArgs>(args: SelectSubset<T, tutores_legalesUpsertArgs<ExtArgs>>): Prisma__tutores_legalesClient<$Result.GetResult<Prisma.$tutores_legalesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tutores_legales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutores_legalesCountArgs} args - Arguments to filter Tutores_legales to count.
     * @example
     * // Count the number of Tutores_legales
     * const count = await prisma.tutores_legales.count({
     *   where: {
     *     // ... the filter for the Tutores_legales we want to count
     *   }
     * })
    **/
    count<T extends tutores_legalesCountArgs>(
      args?: Subset<T, tutores_legalesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tutores_legalesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tutores_legales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tutores_legalesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tutores_legalesAggregateArgs>(args: Subset<T, Tutores_legalesAggregateArgs>): Prisma.PrismaPromise<GetTutores_legalesAggregateType<T>>

    /**
     * Group by Tutores_legales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutores_legalesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tutores_legalesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tutores_legalesGroupByArgs['orderBy'] }
        : { orderBy?: tutores_legalesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tutores_legalesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTutores_legalesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tutores_legales model
   */
  readonly fields: tutores_legalesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tutores_legales.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tutores_legalesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pacientes<T extends tutores_legales$pacientesArgs<ExtArgs> = {}>(args?: Subset<T, tutores_legales$pacientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tutores_legales model
   */
  interface tutores_legalesFieldRefs {
    readonly id: FieldRef<"tutores_legales", 'Int'>
    readonly dni: FieldRef<"tutores_legales", 'String'>
    readonly nombre: FieldRef<"tutores_legales", 'String'>
    readonly apellido: FieldRef<"tutores_legales", 'String'>
    readonly telefono: FieldRef<"tutores_legales", 'String'>
    readonly direccion: FieldRef<"tutores_legales", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tutores_legales findUnique
   */
  export type tutores_legalesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutores_legales
     */
    select?: tutores_legalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutores_legales
     */
    omit?: tutores_legalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutores_legalesInclude<ExtArgs> | null
    /**
     * Filter, which tutores_legales to fetch.
     */
    where: tutores_legalesWhereUniqueInput
  }

  /**
   * tutores_legales findUniqueOrThrow
   */
  export type tutores_legalesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutores_legales
     */
    select?: tutores_legalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutores_legales
     */
    omit?: tutores_legalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutores_legalesInclude<ExtArgs> | null
    /**
     * Filter, which tutores_legales to fetch.
     */
    where: tutores_legalesWhereUniqueInput
  }

  /**
   * tutores_legales findFirst
   */
  export type tutores_legalesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutores_legales
     */
    select?: tutores_legalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutores_legales
     */
    omit?: tutores_legalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutores_legalesInclude<ExtArgs> | null
    /**
     * Filter, which tutores_legales to fetch.
     */
    where?: tutores_legalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tutores_legales to fetch.
     */
    orderBy?: tutores_legalesOrderByWithRelationInput | tutores_legalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tutores_legales.
     */
    cursor?: tutores_legalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tutores_legales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tutores_legales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tutores_legales.
     */
    distinct?: Tutores_legalesScalarFieldEnum | Tutores_legalesScalarFieldEnum[]
  }

  /**
   * tutores_legales findFirstOrThrow
   */
  export type tutores_legalesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutores_legales
     */
    select?: tutores_legalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutores_legales
     */
    omit?: tutores_legalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutores_legalesInclude<ExtArgs> | null
    /**
     * Filter, which tutores_legales to fetch.
     */
    where?: tutores_legalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tutores_legales to fetch.
     */
    orderBy?: tutores_legalesOrderByWithRelationInput | tutores_legalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tutores_legales.
     */
    cursor?: tutores_legalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tutores_legales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tutores_legales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tutores_legales.
     */
    distinct?: Tutores_legalesScalarFieldEnum | Tutores_legalesScalarFieldEnum[]
  }

  /**
   * tutores_legales findMany
   */
  export type tutores_legalesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutores_legales
     */
    select?: tutores_legalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutores_legales
     */
    omit?: tutores_legalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutores_legalesInclude<ExtArgs> | null
    /**
     * Filter, which tutores_legales to fetch.
     */
    where?: tutores_legalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tutores_legales to fetch.
     */
    orderBy?: tutores_legalesOrderByWithRelationInput | tutores_legalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tutores_legales.
     */
    cursor?: tutores_legalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tutores_legales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tutores_legales.
     */
    skip?: number
    distinct?: Tutores_legalesScalarFieldEnum | Tutores_legalesScalarFieldEnum[]
  }

  /**
   * tutores_legales create
   */
  export type tutores_legalesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutores_legales
     */
    select?: tutores_legalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutores_legales
     */
    omit?: tutores_legalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutores_legalesInclude<ExtArgs> | null
    /**
     * The data needed to create a tutores_legales.
     */
    data: XOR<tutores_legalesCreateInput, tutores_legalesUncheckedCreateInput>
  }

  /**
   * tutores_legales createMany
   */
  export type tutores_legalesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tutores_legales.
     */
    data: tutores_legalesCreateManyInput | tutores_legalesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tutores_legales createManyAndReturn
   */
  export type tutores_legalesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutores_legales
     */
    select?: tutores_legalesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tutores_legales
     */
    omit?: tutores_legalesOmit<ExtArgs> | null
    /**
     * The data used to create many tutores_legales.
     */
    data: tutores_legalesCreateManyInput | tutores_legalesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tutores_legales update
   */
  export type tutores_legalesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutores_legales
     */
    select?: tutores_legalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutores_legales
     */
    omit?: tutores_legalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutores_legalesInclude<ExtArgs> | null
    /**
     * The data needed to update a tutores_legales.
     */
    data: XOR<tutores_legalesUpdateInput, tutores_legalesUncheckedUpdateInput>
    /**
     * Choose, which tutores_legales to update.
     */
    where: tutores_legalesWhereUniqueInput
  }

  /**
   * tutores_legales updateMany
   */
  export type tutores_legalesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tutores_legales.
     */
    data: XOR<tutores_legalesUpdateManyMutationInput, tutores_legalesUncheckedUpdateManyInput>
    /**
     * Filter which tutores_legales to update
     */
    where?: tutores_legalesWhereInput
    /**
     * Limit how many tutores_legales to update.
     */
    limit?: number
  }

  /**
   * tutores_legales updateManyAndReturn
   */
  export type tutores_legalesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutores_legales
     */
    select?: tutores_legalesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tutores_legales
     */
    omit?: tutores_legalesOmit<ExtArgs> | null
    /**
     * The data used to update tutores_legales.
     */
    data: XOR<tutores_legalesUpdateManyMutationInput, tutores_legalesUncheckedUpdateManyInput>
    /**
     * Filter which tutores_legales to update
     */
    where?: tutores_legalesWhereInput
    /**
     * Limit how many tutores_legales to update.
     */
    limit?: number
  }

  /**
   * tutores_legales upsert
   */
  export type tutores_legalesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutores_legales
     */
    select?: tutores_legalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutores_legales
     */
    omit?: tutores_legalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutores_legalesInclude<ExtArgs> | null
    /**
     * The filter to search for the tutores_legales to update in case it exists.
     */
    where: tutores_legalesWhereUniqueInput
    /**
     * In case the tutores_legales found by the `where` argument doesn't exist, create a new tutores_legales with this data.
     */
    create: XOR<tutores_legalesCreateInput, tutores_legalesUncheckedCreateInput>
    /**
     * In case the tutores_legales was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tutores_legalesUpdateInput, tutores_legalesUncheckedUpdateInput>
  }

  /**
   * tutores_legales delete
   */
  export type tutores_legalesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutores_legales
     */
    select?: tutores_legalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutores_legales
     */
    omit?: tutores_legalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutores_legalesInclude<ExtArgs> | null
    /**
     * Filter which tutores_legales to delete.
     */
    where: tutores_legalesWhereUniqueInput
  }

  /**
   * tutores_legales deleteMany
   */
  export type tutores_legalesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tutores_legales to delete
     */
    where?: tutores_legalesWhereInput
    /**
     * Limit how many tutores_legales to delete.
     */
    limit?: number
  }

  /**
   * tutores_legales.pacientes
   */
  export type tutores_legales$pacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    where?: pacientesWhereInput
    orderBy?: pacientesOrderByWithRelationInput | pacientesOrderByWithRelationInput[]
    cursor?: pacientesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PacientesScalarFieldEnum | PacientesScalarFieldEnum[]
  }

  /**
   * tutores_legales without action
   */
  export type tutores_legalesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutores_legales
     */
    select?: tutores_legalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tutores_legales
     */
    omit?: tutores_legalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tutores_legalesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AlergiasScalarFieldEnum: {
    id: 'id',
    paciente_id: 'paciente_id',
    alergia: 'alergia'
  };

  export type AlergiasScalarFieldEnum = (typeof AlergiasScalarFieldEnum)[keyof typeof AlergiasScalarFieldEnum]


  export const ConsultasScalarFieldEnum: {
    id: 'id',
    paciente_id: 'paciente_id',
    fecha_consulta: 'fecha_consulta',
    hora_consulta: 'hora_consulta',
    motivo: 'motivo',
    diagnostico: 'diagnostico',
    tratamiento: 'tratamiento',
    imagenes: 'imagenes',
    notas: 'notas'
  };

  export type ConsultasScalarFieldEnum = (typeof ConsultasScalarFieldEnum)[keyof typeof ConsultasScalarFieldEnum]


  export const Contactos_emergenciaScalarFieldEnum: {
    id: 'id',
    paciente_id: 'paciente_id',
    nombre: 'nombre',
    relacion: 'relacion',
    telefono: 'telefono'
  };

  export type Contactos_emergenciaScalarFieldEnum = (typeof Contactos_emergenciaScalarFieldEnum)[keyof typeof Contactos_emergenciaScalarFieldEnum]


  export const EnfermedadesScalarFieldEnum: {
    id: 'id',
    paciente_id: 'paciente_id',
    enfermedad: 'enfermedad'
  };

  export type EnfermedadesScalarFieldEnum = (typeof EnfermedadesScalarFieldEnum)[keyof typeof EnfermedadesScalarFieldEnum]


  export const Historial_cirugiasScalarFieldEnum: {
    id: 'id',
    paciente_id: 'paciente_id',
    cirugia: 'cirugia',
    fecha: 'fecha',
    observaciones: 'observaciones'
  };

  export type Historial_cirugiasScalarFieldEnum = (typeof Historial_cirugiasScalarFieldEnum)[keyof typeof Historial_cirugiasScalarFieldEnum]


  export const Medicamentos_actualesScalarFieldEnum: {
    id: 'id',
    paciente_id: 'paciente_id',
    medicamento: 'medicamento',
    dosis: 'dosis',
    frecuencia: 'frecuencia',
    via_administracion: 'via_administracion'
  };

  export type Medicamentos_actualesScalarFieldEnum = (typeof Medicamentos_actualesScalarFieldEnum)[keyof typeof Medicamentos_actualesScalarFieldEnum]


  export const PacientesScalarFieldEnum: {
    id: 'id',
    dni: 'dni',
    nombre: 'nombre',
    apellido: 'apellido',
    tipo_sangre_id: 'tipo_sangre_id',
    fecha_nacimiento: 'fecha_nacimiento',
    numero_telefono: 'numero_telefono',
    email: 'email',
    obra_social: 'obra_social',
    tutor_legal_id: 'tutor_legal_id'
  };

  export type PacientesScalarFieldEnum = (typeof PacientesScalarFieldEnum)[keyof typeof PacientesScalarFieldEnum]


  export const Tipos_sangreScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo'
  };

  export type Tipos_sangreScalarFieldEnum = (typeof Tipos_sangreScalarFieldEnum)[keyof typeof Tipos_sangreScalarFieldEnum]


  export const Tutores_legalesScalarFieldEnum: {
    id: 'id',
    dni: 'dni',
    nombre: 'nombre',
    apellido: 'apellido',
    telefono: 'telefono',
    direccion: 'direccion'
  };

  export type Tutores_legalesScalarFieldEnum = (typeof Tutores_legalesScalarFieldEnum)[keyof typeof Tutores_legalesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type alergiasWhereInput = {
    AND?: alergiasWhereInput | alergiasWhereInput[]
    OR?: alergiasWhereInput[]
    NOT?: alergiasWhereInput | alergiasWhereInput[]
    id?: IntFilter<"alergias"> | number
    paciente_id?: IntNullableFilter<"alergias"> | number | null
    alergia?: StringFilter<"alergias"> | string
    pacientes?: XOR<PacientesNullableScalarRelationFilter, pacientesWhereInput> | null
  }

  export type alergiasOrderByWithRelationInput = {
    id?: SortOrder
    paciente_id?: SortOrderInput | SortOrder
    alergia?: SortOrder
    pacientes?: pacientesOrderByWithRelationInput
  }

  export type alergiasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: alergiasWhereInput | alergiasWhereInput[]
    OR?: alergiasWhereInput[]
    NOT?: alergiasWhereInput | alergiasWhereInput[]
    paciente_id?: IntNullableFilter<"alergias"> | number | null
    alergia?: StringFilter<"alergias"> | string
    pacientes?: XOR<PacientesNullableScalarRelationFilter, pacientesWhereInput> | null
  }, "id">

  export type alergiasOrderByWithAggregationInput = {
    id?: SortOrder
    paciente_id?: SortOrderInput | SortOrder
    alergia?: SortOrder
    _count?: alergiasCountOrderByAggregateInput
    _avg?: alergiasAvgOrderByAggregateInput
    _max?: alergiasMaxOrderByAggregateInput
    _min?: alergiasMinOrderByAggregateInput
    _sum?: alergiasSumOrderByAggregateInput
  }

  export type alergiasScalarWhereWithAggregatesInput = {
    AND?: alergiasScalarWhereWithAggregatesInput | alergiasScalarWhereWithAggregatesInput[]
    OR?: alergiasScalarWhereWithAggregatesInput[]
    NOT?: alergiasScalarWhereWithAggregatesInput | alergiasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"alergias"> | number
    paciente_id?: IntNullableWithAggregatesFilter<"alergias"> | number | null
    alergia?: StringWithAggregatesFilter<"alergias"> | string
  }

  export type consultasWhereInput = {
    AND?: consultasWhereInput | consultasWhereInput[]
    OR?: consultasWhereInput[]
    NOT?: consultasWhereInput | consultasWhereInput[]
    id?: IntFilter<"consultas"> | number
    paciente_id?: IntNullableFilter<"consultas"> | number | null
    fecha_consulta?: DateTimeFilter<"consultas"> | Date | string
    hora_consulta?: DateTimeFilter<"consultas"> | Date | string
    motivo?: StringFilter<"consultas"> | string
    diagnostico?: StringNullableFilter<"consultas"> | string | null
    tratamiento?: StringNullableFilter<"consultas"> | string | null
    imagenes?: StringNullableListFilter<"consultas">
    notas?: StringNullableFilter<"consultas"> | string | null
    pacientes?: XOR<PacientesNullableScalarRelationFilter, pacientesWhereInput> | null
  }

  export type consultasOrderByWithRelationInput = {
    id?: SortOrder
    paciente_id?: SortOrderInput | SortOrder
    fecha_consulta?: SortOrder
    hora_consulta?: SortOrder
    motivo?: SortOrder
    diagnostico?: SortOrderInput | SortOrder
    tratamiento?: SortOrderInput | SortOrder
    imagenes?: SortOrder
    notas?: SortOrderInput | SortOrder
    pacientes?: pacientesOrderByWithRelationInput
  }

  export type consultasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: consultasWhereInput | consultasWhereInput[]
    OR?: consultasWhereInput[]
    NOT?: consultasWhereInput | consultasWhereInput[]
    paciente_id?: IntNullableFilter<"consultas"> | number | null
    fecha_consulta?: DateTimeFilter<"consultas"> | Date | string
    hora_consulta?: DateTimeFilter<"consultas"> | Date | string
    motivo?: StringFilter<"consultas"> | string
    diagnostico?: StringNullableFilter<"consultas"> | string | null
    tratamiento?: StringNullableFilter<"consultas"> | string | null
    imagenes?: StringNullableListFilter<"consultas">
    notas?: StringNullableFilter<"consultas"> | string | null
    pacientes?: XOR<PacientesNullableScalarRelationFilter, pacientesWhereInput> | null
  }, "id">

  export type consultasOrderByWithAggregationInput = {
    id?: SortOrder
    paciente_id?: SortOrderInput | SortOrder
    fecha_consulta?: SortOrder
    hora_consulta?: SortOrder
    motivo?: SortOrder
    diagnostico?: SortOrderInput | SortOrder
    tratamiento?: SortOrderInput | SortOrder
    imagenes?: SortOrder
    notas?: SortOrderInput | SortOrder
    _count?: consultasCountOrderByAggregateInput
    _avg?: consultasAvgOrderByAggregateInput
    _max?: consultasMaxOrderByAggregateInput
    _min?: consultasMinOrderByAggregateInput
    _sum?: consultasSumOrderByAggregateInput
  }

  export type consultasScalarWhereWithAggregatesInput = {
    AND?: consultasScalarWhereWithAggregatesInput | consultasScalarWhereWithAggregatesInput[]
    OR?: consultasScalarWhereWithAggregatesInput[]
    NOT?: consultasScalarWhereWithAggregatesInput | consultasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"consultas"> | number
    paciente_id?: IntNullableWithAggregatesFilter<"consultas"> | number | null
    fecha_consulta?: DateTimeWithAggregatesFilter<"consultas"> | Date | string
    hora_consulta?: DateTimeWithAggregatesFilter<"consultas"> | Date | string
    motivo?: StringWithAggregatesFilter<"consultas"> | string
    diagnostico?: StringNullableWithAggregatesFilter<"consultas"> | string | null
    tratamiento?: StringNullableWithAggregatesFilter<"consultas"> | string | null
    imagenes?: StringNullableListFilter<"consultas">
    notas?: StringNullableWithAggregatesFilter<"consultas"> | string | null
  }

  export type contactos_emergenciaWhereInput = {
    AND?: contactos_emergenciaWhereInput | contactos_emergenciaWhereInput[]
    OR?: contactos_emergenciaWhereInput[]
    NOT?: contactos_emergenciaWhereInput | contactos_emergenciaWhereInput[]
    id?: IntFilter<"contactos_emergencia"> | number
    paciente_id?: IntNullableFilter<"contactos_emergencia"> | number | null
    nombre?: StringFilter<"contactos_emergencia"> | string
    relacion?: StringNullableFilter<"contactos_emergencia"> | string | null
    telefono?: StringFilter<"contactos_emergencia"> | string
    pacientes?: XOR<PacientesNullableScalarRelationFilter, pacientesWhereInput> | null
  }

  export type contactos_emergenciaOrderByWithRelationInput = {
    id?: SortOrder
    paciente_id?: SortOrderInput | SortOrder
    nombre?: SortOrder
    relacion?: SortOrderInput | SortOrder
    telefono?: SortOrder
    pacientes?: pacientesOrderByWithRelationInput
  }

  export type contactos_emergenciaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: contactos_emergenciaWhereInput | contactos_emergenciaWhereInput[]
    OR?: contactos_emergenciaWhereInput[]
    NOT?: contactos_emergenciaWhereInput | contactos_emergenciaWhereInput[]
    paciente_id?: IntNullableFilter<"contactos_emergencia"> | number | null
    nombre?: StringFilter<"contactos_emergencia"> | string
    relacion?: StringNullableFilter<"contactos_emergencia"> | string | null
    telefono?: StringFilter<"contactos_emergencia"> | string
    pacientes?: XOR<PacientesNullableScalarRelationFilter, pacientesWhereInput> | null
  }, "id">

  export type contactos_emergenciaOrderByWithAggregationInput = {
    id?: SortOrder
    paciente_id?: SortOrderInput | SortOrder
    nombre?: SortOrder
    relacion?: SortOrderInput | SortOrder
    telefono?: SortOrder
    _count?: contactos_emergenciaCountOrderByAggregateInput
    _avg?: contactos_emergenciaAvgOrderByAggregateInput
    _max?: contactos_emergenciaMaxOrderByAggregateInput
    _min?: contactos_emergenciaMinOrderByAggregateInput
    _sum?: contactos_emergenciaSumOrderByAggregateInput
  }

  export type contactos_emergenciaScalarWhereWithAggregatesInput = {
    AND?: contactos_emergenciaScalarWhereWithAggregatesInput | contactos_emergenciaScalarWhereWithAggregatesInput[]
    OR?: contactos_emergenciaScalarWhereWithAggregatesInput[]
    NOT?: contactos_emergenciaScalarWhereWithAggregatesInput | contactos_emergenciaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"contactos_emergencia"> | number
    paciente_id?: IntNullableWithAggregatesFilter<"contactos_emergencia"> | number | null
    nombre?: StringWithAggregatesFilter<"contactos_emergencia"> | string
    relacion?: StringNullableWithAggregatesFilter<"contactos_emergencia"> | string | null
    telefono?: StringWithAggregatesFilter<"contactos_emergencia"> | string
  }

  export type enfermedadesWhereInput = {
    AND?: enfermedadesWhereInput | enfermedadesWhereInput[]
    OR?: enfermedadesWhereInput[]
    NOT?: enfermedadesWhereInput | enfermedadesWhereInput[]
    id?: IntFilter<"enfermedades"> | number
    paciente_id?: IntNullableFilter<"enfermedades"> | number | null
    enfermedad?: StringFilter<"enfermedades"> | string
    pacientes?: XOR<PacientesNullableScalarRelationFilter, pacientesWhereInput> | null
  }

  export type enfermedadesOrderByWithRelationInput = {
    id?: SortOrder
    paciente_id?: SortOrderInput | SortOrder
    enfermedad?: SortOrder
    pacientes?: pacientesOrderByWithRelationInput
  }

  export type enfermedadesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: enfermedadesWhereInput | enfermedadesWhereInput[]
    OR?: enfermedadesWhereInput[]
    NOT?: enfermedadesWhereInput | enfermedadesWhereInput[]
    paciente_id?: IntNullableFilter<"enfermedades"> | number | null
    enfermedad?: StringFilter<"enfermedades"> | string
    pacientes?: XOR<PacientesNullableScalarRelationFilter, pacientesWhereInput> | null
  }, "id">

  export type enfermedadesOrderByWithAggregationInput = {
    id?: SortOrder
    paciente_id?: SortOrderInput | SortOrder
    enfermedad?: SortOrder
    _count?: enfermedadesCountOrderByAggregateInput
    _avg?: enfermedadesAvgOrderByAggregateInput
    _max?: enfermedadesMaxOrderByAggregateInput
    _min?: enfermedadesMinOrderByAggregateInput
    _sum?: enfermedadesSumOrderByAggregateInput
  }

  export type enfermedadesScalarWhereWithAggregatesInput = {
    AND?: enfermedadesScalarWhereWithAggregatesInput | enfermedadesScalarWhereWithAggregatesInput[]
    OR?: enfermedadesScalarWhereWithAggregatesInput[]
    NOT?: enfermedadesScalarWhereWithAggregatesInput | enfermedadesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"enfermedades"> | number
    paciente_id?: IntNullableWithAggregatesFilter<"enfermedades"> | number | null
    enfermedad?: StringWithAggregatesFilter<"enfermedades"> | string
  }

  export type historial_cirugiasWhereInput = {
    AND?: historial_cirugiasWhereInput | historial_cirugiasWhereInput[]
    OR?: historial_cirugiasWhereInput[]
    NOT?: historial_cirugiasWhereInput | historial_cirugiasWhereInput[]
    id?: IntFilter<"historial_cirugias"> | number
    paciente_id?: IntNullableFilter<"historial_cirugias"> | number | null
    cirugia?: StringFilter<"historial_cirugias"> | string
    fecha?: DateTimeNullableFilter<"historial_cirugias"> | Date | string | null
    observaciones?: StringNullableFilter<"historial_cirugias"> | string | null
    pacientes?: XOR<PacientesNullableScalarRelationFilter, pacientesWhereInput> | null
  }

  export type historial_cirugiasOrderByWithRelationInput = {
    id?: SortOrder
    paciente_id?: SortOrderInput | SortOrder
    cirugia?: SortOrder
    fecha?: SortOrderInput | SortOrder
    observaciones?: SortOrderInput | SortOrder
    pacientes?: pacientesOrderByWithRelationInput
  }

  export type historial_cirugiasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: historial_cirugiasWhereInput | historial_cirugiasWhereInput[]
    OR?: historial_cirugiasWhereInput[]
    NOT?: historial_cirugiasWhereInput | historial_cirugiasWhereInput[]
    paciente_id?: IntNullableFilter<"historial_cirugias"> | number | null
    cirugia?: StringFilter<"historial_cirugias"> | string
    fecha?: DateTimeNullableFilter<"historial_cirugias"> | Date | string | null
    observaciones?: StringNullableFilter<"historial_cirugias"> | string | null
    pacientes?: XOR<PacientesNullableScalarRelationFilter, pacientesWhereInput> | null
  }, "id">

  export type historial_cirugiasOrderByWithAggregationInput = {
    id?: SortOrder
    paciente_id?: SortOrderInput | SortOrder
    cirugia?: SortOrder
    fecha?: SortOrderInput | SortOrder
    observaciones?: SortOrderInput | SortOrder
    _count?: historial_cirugiasCountOrderByAggregateInput
    _avg?: historial_cirugiasAvgOrderByAggregateInput
    _max?: historial_cirugiasMaxOrderByAggregateInput
    _min?: historial_cirugiasMinOrderByAggregateInput
    _sum?: historial_cirugiasSumOrderByAggregateInput
  }

  export type historial_cirugiasScalarWhereWithAggregatesInput = {
    AND?: historial_cirugiasScalarWhereWithAggregatesInput | historial_cirugiasScalarWhereWithAggregatesInput[]
    OR?: historial_cirugiasScalarWhereWithAggregatesInput[]
    NOT?: historial_cirugiasScalarWhereWithAggregatesInput | historial_cirugiasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"historial_cirugias"> | number
    paciente_id?: IntNullableWithAggregatesFilter<"historial_cirugias"> | number | null
    cirugia?: StringWithAggregatesFilter<"historial_cirugias"> | string
    fecha?: DateTimeNullableWithAggregatesFilter<"historial_cirugias"> | Date | string | null
    observaciones?: StringNullableWithAggregatesFilter<"historial_cirugias"> | string | null
  }

  export type medicamentos_actualesWhereInput = {
    AND?: medicamentos_actualesWhereInput | medicamentos_actualesWhereInput[]
    OR?: medicamentos_actualesWhereInput[]
    NOT?: medicamentos_actualesWhereInput | medicamentos_actualesWhereInput[]
    id?: IntFilter<"medicamentos_actuales"> | number
    paciente_id?: IntNullableFilter<"medicamentos_actuales"> | number | null
    medicamento?: StringFilter<"medicamentos_actuales"> | string
    dosis?: StringFilter<"medicamentos_actuales"> | string
    frecuencia?: StringFilter<"medicamentos_actuales"> | string
    via_administracion?: StringFilter<"medicamentos_actuales"> | string
    pacientes?: XOR<PacientesNullableScalarRelationFilter, pacientesWhereInput> | null
  }

  export type medicamentos_actualesOrderByWithRelationInput = {
    id?: SortOrder
    paciente_id?: SortOrderInput | SortOrder
    medicamento?: SortOrder
    dosis?: SortOrder
    frecuencia?: SortOrder
    via_administracion?: SortOrder
    pacientes?: pacientesOrderByWithRelationInput
  }

  export type medicamentos_actualesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: medicamentos_actualesWhereInput | medicamentos_actualesWhereInput[]
    OR?: medicamentos_actualesWhereInput[]
    NOT?: medicamentos_actualesWhereInput | medicamentos_actualesWhereInput[]
    paciente_id?: IntNullableFilter<"medicamentos_actuales"> | number | null
    medicamento?: StringFilter<"medicamentos_actuales"> | string
    dosis?: StringFilter<"medicamentos_actuales"> | string
    frecuencia?: StringFilter<"medicamentos_actuales"> | string
    via_administracion?: StringFilter<"medicamentos_actuales"> | string
    pacientes?: XOR<PacientesNullableScalarRelationFilter, pacientesWhereInput> | null
  }, "id">

  export type medicamentos_actualesOrderByWithAggregationInput = {
    id?: SortOrder
    paciente_id?: SortOrderInput | SortOrder
    medicamento?: SortOrder
    dosis?: SortOrder
    frecuencia?: SortOrder
    via_administracion?: SortOrder
    _count?: medicamentos_actualesCountOrderByAggregateInput
    _avg?: medicamentos_actualesAvgOrderByAggregateInput
    _max?: medicamentos_actualesMaxOrderByAggregateInput
    _min?: medicamentos_actualesMinOrderByAggregateInput
    _sum?: medicamentos_actualesSumOrderByAggregateInput
  }

  export type medicamentos_actualesScalarWhereWithAggregatesInput = {
    AND?: medicamentos_actualesScalarWhereWithAggregatesInput | medicamentos_actualesScalarWhereWithAggregatesInput[]
    OR?: medicamentos_actualesScalarWhereWithAggregatesInput[]
    NOT?: medicamentos_actualesScalarWhereWithAggregatesInput | medicamentos_actualesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"medicamentos_actuales"> | number
    paciente_id?: IntNullableWithAggregatesFilter<"medicamentos_actuales"> | number | null
    medicamento?: StringWithAggregatesFilter<"medicamentos_actuales"> | string
    dosis?: StringWithAggregatesFilter<"medicamentos_actuales"> | string
    frecuencia?: StringWithAggregatesFilter<"medicamentos_actuales"> | string
    via_administracion?: StringWithAggregatesFilter<"medicamentos_actuales"> | string
  }

  export type pacientesWhereInput = {
    AND?: pacientesWhereInput | pacientesWhereInput[]
    OR?: pacientesWhereInput[]
    NOT?: pacientesWhereInput | pacientesWhereInput[]
    id?: IntFilter<"pacientes"> | number
    dni?: StringFilter<"pacientes"> | string
    nombre?: StringFilter<"pacientes"> | string
    apellido?: StringFilter<"pacientes"> | string
    tipo_sangre_id?: IntNullableFilter<"pacientes"> | number | null
    fecha_nacimiento?: DateTimeFilter<"pacientes"> | Date | string
    numero_telefono?: StringFilter<"pacientes"> | string
    email?: StringFilter<"pacientes"> | string
    obra_social?: StringNullableFilter<"pacientes"> | string | null
    tutor_legal_id?: IntNullableFilter<"pacientes"> | number | null
    alergias?: AlergiasListRelationFilter
    consultas?: ConsultasListRelationFilter
    contactos_emergencia?: Contactos_emergenciaListRelationFilter
    enfermedades?: EnfermedadesListRelationFilter
    historial_cirugias?: Historial_cirugiasListRelationFilter
    medicamentos_actuales?: Medicamentos_actualesListRelationFilter
    tipos_sangre?: XOR<Tipos_sangreNullableScalarRelationFilter, tipos_sangreWhereInput> | null
    tutores_legales?: XOR<Tutores_legalesNullableScalarRelationFilter, tutores_legalesWhereInput> | null
  }

  export type pacientesOrderByWithRelationInput = {
    id?: SortOrder
    dni?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    tipo_sangre_id?: SortOrderInput | SortOrder
    fecha_nacimiento?: SortOrder
    numero_telefono?: SortOrder
    email?: SortOrder
    obra_social?: SortOrderInput | SortOrder
    tutor_legal_id?: SortOrderInput | SortOrder
    alergias?: alergiasOrderByRelationAggregateInput
    consultas?: consultasOrderByRelationAggregateInput
    contactos_emergencia?: contactos_emergenciaOrderByRelationAggregateInput
    enfermedades?: enfermedadesOrderByRelationAggregateInput
    historial_cirugias?: historial_cirugiasOrderByRelationAggregateInput
    medicamentos_actuales?: medicamentos_actualesOrderByRelationAggregateInput
    tipos_sangre?: tipos_sangreOrderByWithRelationInput
    tutores_legales?: tutores_legalesOrderByWithRelationInput
  }

  export type pacientesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    dni?: string
    AND?: pacientesWhereInput | pacientesWhereInput[]
    OR?: pacientesWhereInput[]
    NOT?: pacientesWhereInput | pacientesWhereInput[]
    nombre?: StringFilter<"pacientes"> | string
    apellido?: StringFilter<"pacientes"> | string
    tipo_sangre_id?: IntNullableFilter<"pacientes"> | number | null
    fecha_nacimiento?: DateTimeFilter<"pacientes"> | Date | string
    numero_telefono?: StringFilter<"pacientes"> | string
    email?: StringFilter<"pacientes"> | string
    obra_social?: StringNullableFilter<"pacientes"> | string | null
    tutor_legal_id?: IntNullableFilter<"pacientes"> | number | null
    alergias?: AlergiasListRelationFilter
    consultas?: ConsultasListRelationFilter
    contactos_emergencia?: Contactos_emergenciaListRelationFilter
    enfermedades?: EnfermedadesListRelationFilter
    historial_cirugias?: Historial_cirugiasListRelationFilter
    medicamentos_actuales?: Medicamentos_actualesListRelationFilter
    tipos_sangre?: XOR<Tipos_sangreNullableScalarRelationFilter, tipos_sangreWhereInput> | null
    tutores_legales?: XOR<Tutores_legalesNullableScalarRelationFilter, tutores_legalesWhereInput> | null
  }, "id" | "dni">

  export type pacientesOrderByWithAggregationInput = {
    id?: SortOrder
    dni?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    tipo_sangre_id?: SortOrderInput | SortOrder
    fecha_nacimiento?: SortOrder
    numero_telefono?: SortOrder
    email?: SortOrder
    obra_social?: SortOrderInput | SortOrder
    tutor_legal_id?: SortOrderInput | SortOrder
    _count?: pacientesCountOrderByAggregateInput
    _avg?: pacientesAvgOrderByAggregateInput
    _max?: pacientesMaxOrderByAggregateInput
    _min?: pacientesMinOrderByAggregateInput
    _sum?: pacientesSumOrderByAggregateInput
  }

  export type pacientesScalarWhereWithAggregatesInput = {
    AND?: pacientesScalarWhereWithAggregatesInput | pacientesScalarWhereWithAggregatesInput[]
    OR?: pacientesScalarWhereWithAggregatesInput[]
    NOT?: pacientesScalarWhereWithAggregatesInput | pacientesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"pacientes"> | number
    dni?: StringWithAggregatesFilter<"pacientes"> | string
    nombre?: StringWithAggregatesFilter<"pacientes"> | string
    apellido?: StringWithAggregatesFilter<"pacientes"> | string
    tipo_sangre_id?: IntNullableWithAggregatesFilter<"pacientes"> | number | null
    fecha_nacimiento?: DateTimeWithAggregatesFilter<"pacientes"> | Date | string
    numero_telefono?: StringWithAggregatesFilter<"pacientes"> | string
    email?: StringWithAggregatesFilter<"pacientes"> | string
    obra_social?: StringNullableWithAggregatesFilter<"pacientes"> | string | null
    tutor_legal_id?: IntNullableWithAggregatesFilter<"pacientes"> | number | null
  }

  export type tipos_sangreWhereInput = {
    AND?: tipos_sangreWhereInput | tipos_sangreWhereInput[]
    OR?: tipos_sangreWhereInput[]
    NOT?: tipos_sangreWhereInput | tipos_sangreWhereInput[]
    id?: IntFilter<"tipos_sangre"> | number
    tipo?: StringFilter<"tipos_sangre"> | string
    pacientes?: PacientesListRelationFilter
  }

  export type tipos_sangreOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    pacientes?: pacientesOrderByRelationAggregateInput
  }

  export type tipos_sangreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tipo?: string
    AND?: tipos_sangreWhereInput | tipos_sangreWhereInput[]
    OR?: tipos_sangreWhereInput[]
    NOT?: tipos_sangreWhereInput | tipos_sangreWhereInput[]
    pacientes?: PacientesListRelationFilter
  }, "id" | "tipo">

  export type tipos_sangreOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    _count?: tipos_sangreCountOrderByAggregateInput
    _avg?: tipos_sangreAvgOrderByAggregateInput
    _max?: tipos_sangreMaxOrderByAggregateInput
    _min?: tipos_sangreMinOrderByAggregateInput
    _sum?: tipos_sangreSumOrderByAggregateInput
  }

  export type tipos_sangreScalarWhereWithAggregatesInput = {
    AND?: tipos_sangreScalarWhereWithAggregatesInput | tipos_sangreScalarWhereWithAggregatesInput[]
    OR?: tipos_sangreScalarWhereWithAggregatesInput[]
    NOT?: tipos_sangreScalarWhereWithAggregatesInput | tipos_sangreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tipos_sangre"> | number
    tipo?: StringWithAggregatesFilter<"tipos_sangre"> | string
  }

  export type tutores_legalesWhereInput = {
    AND?: tutores_legalesWhereInput | tutores_legalesWhereInput[]
    OR?: tutores_legalesWhereInput[]
    NOT?: tutores_legalesWhereInput | tutores_legalesWhereInput[]
    id?: IntFilter<"tutores_legales"> | number
    dni?: StringFilter<"tutores_legales"> | string
    nombre?: StringFilter<"tutores_legales"> | string
    apellido?: StringFilter<"tutores_legales"> | string
    telefono?: StringNullableFilter<"tutores_legales"> | string | null
    direccion?: StringNullableFilter<"tutores_legales"> | string | null
    pacientes?: PacientesListRelationFilter
  }

  export type tutores_legalesOrderByWithRelationInput = {
    id?: SortOrder
    dni?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    telefono?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    pacientes?: pacientesOrderByRelationAggregateInput
  }

  export type tutores_legalesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    dni?: string
    AND?: tutores_legalesWhereInput | tutores_legalesWhereInput[]
    OR?: tutores_legalesWhereInput[]
    NOT?: tutores_legalesWhereInput | tutores_legalesWhereInput[]
    nombre?: StringFilter<"tutores_legales"> | string
    apellido?: StringFilter<"tutores_legales"> | string
    telefono?: StringNullableFilter<"tutores_legales"> | string | null
    direccion?: StringNullableFilter<"tutores_legales"> | string | null
    pacientes?: PacientesListRelationFilter
  }, "id" | "dni">

  export type tutores_legalesOrderByWithAggregationInput = {
    id?: SortOrder
    dni?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    telefono?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    _count?: tutores_legalesCountOrderByAggregateInput
    _avg?: tutores_legalesAvgOrderByAggregateInput
    _max?: tutores_legalesMaxOrderByAggregateInput
    _min?: tutores_legalesMinOrderByAggregateInput
    _sum?: tutores_legalesSumOrderByAggregateInput
  }

  export type tutores_legalesScalarWhereWithAggregatesInput = {
    AND?: tutores_legalesScalarWhereWithAggregatesInput | tutores_legalesScalarWhereWithAggregatesInput[]
    OR?: tutores_legalesScalarWhereWithAggregatesInput[]
    NOT?: tutores_legalesScalarWhereWithAggregatesInput | tutores_legalesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tutores_legales"> | number
    dni?: StringWithAggregatesFilter<"tutores_legales"> | string
    nombre?: StringWithAggregatesFilter<"tutores_legales"> | string
    apellido?: StringWithAggregatesFilter<"tutores_legales"> | string
    telefono?: StringNullableWithAggregatesFilter<"tutores_legales"> | string | null
    direccion?: StringNullableWithAggregatesFilter<"tutores_legales"> | string | null
  }

  export type alergiasCreateInput = {
    alergia: string
    pacientes?: pacientesCreateNestedOneWithoutAlergiasInput
  }

  export type alergiasUncheckedCreateInput = {
    id?: number
    paciente_id?: number | null
    alergia: string
  }

  export type alergiasUpdateInput = {
    alergia?: StringFieldUpdateOperationsInput | string
    pacientes?: pacientesUpdateOneWithoutAlergiasNestedInput
  }

  export type alergiasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    paciente_id?: NullableIntFieldUpdateOperationsInput | number | null
    alergia?: StringFieldUpdateOperationsInput | string
  }

  export type alergiasCreateManyInput = {
    id?: number
    paciente_id?: number | null
    alergia: string
  }

  export type alergiasUpdateManyMutationInput = {
    alergia?: StringFieldUpdateOperationsInput | string
  }

  export type alergiasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    paciente_id?: NullableIntFieldUpdateOperationsInput | number | null
    alergia?: StringFieldUpdateOperationsInput | string
  }

  export type consultasCreateInput = {
    fecha_consulta: Date | string
    hora_consulta: Date | string
    motivo: string
    diagnostico?: string | null
    tratamiento?: string | null
    imagenes?: consultasCreateimagenesInput | string[]
    notas?: string | null
    pacientes?: pacientesCreateNestedOneWithoutConsultasInput
  }

  export type consultasUncheckedCreateInput = {
    id?: number
    paciente_id?: number | null
    fecha_consulta: Date | string
    hora_consulta: Date | string
    motivo: string
    diagnostico?: string | null
    tratamiento?: string | null
    imagenes?: consultasCreateimagenesInput | string[]
    notas?: string | null
  }

  export type consultasUpdateInput = {
    fecha_consulta?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_consulta?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    diagnostico?: NullableStringFieldUpdateOperationsInput | string | null
    tratamiento?: NullableStringFieldUpdateOperationsInput | string | null
    imagenes?: consultasUpdateimagenesInput | string[]
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    pacientes?: pacientesUpdateOneWithoutConsultasNestedInput
  }

  export type consultasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    paciente_id?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_consulta?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_consulta?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    diagnostico?: NullableStringFieldUpdateOperationsInput | string | null
    tratamiento?: NullableStringFieldUpdateOperationsInput | string | null
    imagenes?: consultasUpdateimagenesInput | string[]
    notas?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type consultasCreateManyInput = {
    id?: number
    paciente_id?: number | null
    fecha_consulta: Date | string
    hora_consulta: Date | string
    motivo: string
    diagnostico?: string | null
    tratamiento?: string | null
    imagenes?: consultasCreateimagenesInput | string[]
    notas?: string | null
  }

  export type consultasUpdateManyMutationInput = {
    fecha_consulta?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_consulta?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    diagnostico?: NullableStringFieldUpdateOperationsInput | string | null
    tratamiento?: NullableStringFieldUpdateOperationsInput | string | null
    imagenes?: consultasUpdateimagenesInput | string[]
    notas?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type consultasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    paciente_id?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_consulta?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_consulta?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    diagnostico?: NullableStringFieldUpdateOperationsInput | string | null
    tratamiento?: NullableStringFieldUpdateOperationsInput | string | null
    imagenes?: consultasUpdateimagenesInput | string[]
    notas?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type contactos_emergenciaCreateInput = {
    nombre: string
    relacion?: string | null
    telefono: string
    pacientes?: pacientesCreateNestedOneWithoutContactos_emergenciaInput
  }

  export type contactos_emergenciaUncheckedCreateInput = {
    id?: number
    paciente_id?: number | null
    nombre: string
    relacion?: string | null
    telefono: string
  }

  export type contactos_emergenciaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    relacion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: StringFieldUpdateOperationsInput | string
    pacientes?: pacientesUpdateOneWithoutContactos_emergenciaNestedInput
  }

  export type contactos_emergenciaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    paciente_id?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: StringFieldUpdateOperationsInput | string
    relacion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: StringFieldUpdateOperationsInput | string
  }

  export type contactos_emergenciaCreateManyInput = {
    id?: number
    paciente_id?: number | null
    nombre: string
    relacion?: string | null
    telefono: string
  }

  export type contactos_emergenciaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    relacion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: StringFieldUpdateOperationsInput | string
  }

  export type contactos_emergenciaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    paciente_id?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: StringFieldUpdateOperationsInput | string
    relacion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: StringFieldUpdateOperationsInput | string
  }

  export type enfermedadesCreateInput = {
    enfermedad: string
    pacientes?: pacientesCreateNestedOneWithoutEnfermedadesInput
  }

  export type enfermedadesUncheckedCreateInput = {
    id?: number
    paciente_id?: number | null
    enfermedad: string
  }

  export type enfermedadesUpdateInput = {
    enfermedad?: StringFieldUpdateOperationsInput | string
    pacientes?: pacientesUpdateOneWithoutEnfermedadesNestedInput
  }

  export type enfermedadesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    paciente_id?: NullableIntFieldUpdateOperationsInput | number | null
    enfermedad?: StringFieldUpdateOperationsInput | string
  }

  export type enfermedadesCreateManyInput = {
    id?: number
    paciente_id?: number | null
    enfermedad: string
  }

  export type enfermedadesUpdateManyMutationInput = {
    enfermedad?: StringFieldUpdateOperationsInput | string
  }

  export type enfermedadesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    paciente_id?: NullableIntFieldUpdateOperationsInput | number | null
    enfermedad?: StringFieldUpdateOperationsInput | string
  }

  export type historial_cirugiasCreateInput = {
    cirugia: string
    fecha?: Date | string | null
    observaciones?: string | null
    pacientes?: pacientesCreateNestedOneWithoutHistorial_cirugiasInput
  }

  export type historial_cirugiasUncheckedCreateInput = {
    id?: number
    paciente_id?: number | null
    cirugia: string
    fecha?: Date | string | null
    observaciones?: string | null
  }

  export type historial_cirugiasUpdateInput = {
    cirugia?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    pacientes?: pacientesUpdateOneWithoutHistorial_cirugiasNestedInput
  }

  export type historial_cirugiasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    paciente_id?: NullableIntFieldUpdateOperationsInput | number | null
    cirugia?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type historial_cirugiasCreateManyInput = {
    id?: number
    paciente_id?: number | null
    cirugia: string
    fecha?: Date | string | null
    observaciones?: string | null
  }

  export type historial_cirugiasUpdateManyMutationInput = {
    cirugia?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type historial_cirugiasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    paciente_id?: NullableIntFieldUpdateOperationsInput | number | null
    cirugia?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type medicamentos_actualesCreateInput = {
    medicamento: string
    dosis: string
    frecuencia: string
    via_administracion: string
    pacientes?: pacientesCreateNestedOneWithoutMedicamentos_actualesInput
  }

  export type medicamentos_actualesUncheckedCreateInput = {
    id?: number
    paciente_id?: number | null
    medicamento: string
    dosis: string
    frecuencia: string
    via_administracion: string
  }

  export type medicamentos_actualesUpdateInput = {
    medicamento?: StringFieldUpdateOperationsInput | string
    dosis?: StringFieldUpdateOperationsInput | string
    frecuencia?: StringFieldUpdateOperationsInput | string
    via_administracion?: StringFieldUpdateOperationsInput | string
    pacientes?: pacientesUpdateOneWithoutMedicamentos_actualesNestedInput
  }

  export type medicamentos_actualesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    paciente_id?: NullableIntFieldUpdateOperationsInput | number | null
    medicamento?: StringFieldUpdateOperationsInput | string
    dosis?: StringFieldUpdateOperationsInput | string
    frecuencia?: StringFieldUpdateOperationsInput | string
    via_administracion?: StringFieldUpdateOperationsInput | string
  }

  export type medicamentos_actualesCreateManyInput = {
    id?: number
    paciente_id?: number | null
    medicamento: string
    dosis: string
    frecuencia: string
    via_administracion: string
  }

  export type medicamentos_actualesUpdateManyMutationInput = {
    medicamento?: StringFieldUpdateOperationsInput | string
    dosis?: StringFieldUpdateOperationsInput | string
    frecuencia?: StringFieldUpdateOperationsInput | string
    via_administracion?: StringFieldUpdateOperationsInput | string
  }

  export type medicamentos_actualesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    paciente_id?: NullableIntFieldUpdateOperationsInput | number | null
    medicamento?: StringFieldUpdateOperationsInput | string
    dosis?: StringFieldUpdateOperationsInput | string
    frecuencia?: StringFieldUpdateOperationsInput | string
    via_administracion?: StringFieldUpdateOperationsInput | string
  }

  export type pacientesCreateInput = {
    dni: string
    nombre: string
    apellido: string
    fecha_nacimiento: Date | string
    numero_telefono: string
    email: string
    obra_social?: string | null
    alergias?: alergiasCreateNestedManyWithoutPacientesInput
    consultas?: consultasCreateNestedManyWithoutPacientesInput
    contactos_emergencia?: contactos_emergenciaCreateNestedManyWithoutPacientesInput
    enfermedades?: enfermedadesCreateNestedManyWithoutPacientesInput
    historial_cirugias?: historial_cirugiasCreateNestedManyWithoutPacientesInput
    medicamentos_actuales?: medicamentos_actualesCreateNestedManyWithoutPacientesInput
    tipos_sangre?: tipos_sangreCreateNestedOneWithoutPacientesInput
    tutores_legales?: tutores_legalesCreateNestedOneWithoutPacientesInput
  }

  export type pacientesUncheckedCreateInput = {
    id?: number
    dni: string
    nombre: string
    apellido: string
    tipo_sangre_id?: number | null
    fecha_nacimiento: Date | string
    numero_telefono: string
    email: string
    obra_social?: string | null
    tutor_legal_id?: number | null
    alergias?: alergiasUncheckedCreateNestedManyWithoutPacientesInput
    consultas?: consultasUncheckedCreateNestedManyWithoutPacientesInput
    contactos_emergencia?: contactos_emergenciaUncheckedCreateNestedManyWithoutPacientesInput
    enfermedades?: enfermedadesUncheckedCreateNestedManyWithoutPacientesInput
    historial_cirugias?: historial_cirugiasUncheckedCreateNestedManyWithoutPacientesInput
    medicamentos_actuales?: medicamentos_actualesUncheckedCreateNestedManyWithoutPacientesInput
  }

  export type pacientesUpdateInput = {
    dni?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    obra_social?: NullableStringFieldUpdateOperationsInput | string | null
    alergias?: alergiasUpdateManyWithoutPacientesNestedInput
    consultas?: consultasUpdateManyWithoutPacientesNestedInput
    contactos_emergencia?: contactos_emergenciaUpdateManyWithoutPacientesNestedInput
    enfermedades?: enfermedadesUpdateManyWithoutPacientesNestedInput
    historial_cirugias?: historial_cirugiasUpdateManyWithoutPacientesNestedInput
    medicamentos_actuales?: medicamentos_actualesUpdateManyWithoutPacientesNestedInput
    tipos_sangre?: tipos_sangreUpdateOneWithoutPacientesNestedInput
    tutores_legales?: tutores_legalesUpdateOneWithoutPacientesNestedInput
  }

  export type pacientesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dni?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    tipo_sangre_id?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    obra_social?: NullableStringFieldUpdateOperationsInput | string | null
    tutor_legal_id?: NullableIntFieldUpdateOperationsInput | number | null
    alergias?: alergiasUncheckedUpdateManyWithoutPacientesNestedInput
    consultas?: consultasUncheckedUpdateManyWithoutPacientesNestedInput
    contactos_emergencia?: contactos_emergenciaUncheckedUpdateManyWithoutPacientesNestedInput
    enfermedades?: enfermedadesUncheckedUpdateManyWithoutPacientesNestedInput
    historial_cirugias?: historial_cirugiasUncheckedUpdateManyWithoutPacientesNestedInput
    medicamentos_actuales?: medicamentos_actualesUncheckedUpdateManyWithoutPacientesNestedInput
  }

  export type pacientesCreateManyInput = {
    id?: number
    dni: string
    nombre: string
    apellido: string
    tipo_sangre_id?: number | null
    fecha_nacimiento: Date | string
    numero_telefono: string
    email: string
    obra_social?: string | null
    tutor_legal_id?: number | null
  }

  export type pacientesUpdateManyMutationInput = {
    dni?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    obra_social?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pacientesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dni?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    tipo_sangre_id?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    obra_social?: NullableStringFieldUpdateOperationsInput | string | null
    tutor_legal_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tipos_sangreCreateInput = {
    tipo: string
    pacientes?: pacientesCreateNestedManyWithoutTipos_sangreInput
  }

  export type tipos_sangreUncheckedCreateInput = {
    id?: number
    tipo: string
    pacientes?: pacientesUncheckedCreateNestedManyWithoutTipos_sangreInput
  }

  export type tipos_sangreUpdateInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    pacientes?: pacientesUpdateManyWithoutTipos_sangreNestedInput
  }

  export type tipos_sangreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    pacientes?: pacientesUncheckedUpdateManyWithoutTipos_sangreNestedInput
  }

  export type tipos_sangreCreateManyInput = {
    id?: number
    tipo: string
  }

  export type tipos_sangreUpdateManyMutationInput = {
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type tipos_sangreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type tutores_legalesCreateInput = {
    dni: string
    nombre: string
    apellido: string
    telefono?: string | null
    direccion?: string | null
    pacientes?: pacientesCreateNestedManyWithoutTutores_legalesInput
  }

  export type tutores_legalesUncheckedCreateInput = {
    id?: number
    dni: string
    nombre: string
    apellido: string
    telefono?: string | null
    direccion?: string | null
    pacientes?: pacientesUncheckedCreateNestedManyWithoutTutores_legalesInput
  }

  export type tutores_legalesUpdateInput = {
    dni?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    pacientes?: pacientesUpdateManyWithoutTutores_legalesNestedInput
  }

  export type tutores_legalesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dni?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    pacientes?: pacientesUncheckedUpdateManyWithoutTutores_legalesNestedInput
  }

  export type tutores_legalesCreateManyInput = {
    id?: number
    dni: string
    nombre: string
    apellido: string
    telefono?: string | null
    direccion?: string | null
  }

  export type tutores_legalesUpdateManyMutationInput = {
    dni?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tutores_legalesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dni?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type PacientesNullableScalarRelationFilter = {
    is?: pacientesWhereInput | null
    isNot?: pacientesWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type alergiasCountOrderByAggregateInput = {
    id?: SortOrder
    paciente_id?: SortOrder
    alergia?: SortOrder
  }

  export type alergiasAvgOrderByAggregateInput = {
    id?: SortOrder
    paciente_id?: SortOrder
  }

  export type alergiasMaxOrderByAggregateInput = {
    id?: SortOrder
    paciente_id?: SortOrder
    alergia?: SortOrder
  }

  export type alergiasMinOrderByAggregateInput = {
    id?: SortOrder
    paciente_id?: SortOrder
    alergia?: SortOrder
  }

  export type alergiasSumOrderByAggregateInput = {
    id?: SortOrder
    paciente_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type consultasCountOrderByAggregateInput = {
    id?: SortOrder
    paciente_id?: SortOrder
    fecha_consulta?: SortOrder
    hora_consulta?: SortOrder
    motivo?: SortOrder
    diagnostico?: SortOrder
    tratamiento?: SortOrder
    imagenes?: SortOrder
    notas?: SortOrder
  }

  export type consultasAvgOrderByAggregateInput = {
    id?: SortOrder
    paciente_id?: SortOrder
  }

  export type consultasMaxOrderByAggregateInput = {
    id?: SortOrder
    paciente_id?: SortOrder
    fecha_consulta?: SortOrder
    hora_consulta?: SortOrder
    motivo?: SortOrder
    diagnostico?: SortOrder
    tratamiento?: SortOrder
    notas?: SortOrder
  }

  export type consultasMinOrderByAggregateInput = {
    id?: SortOrder
    paciente_id?: SortOrder
    fecha_consulta?: SortOrder
    hora_consulta?: SortOrder
    motivo?: SortOrder
    diagnostico?: SortOrder
    tratamiento?: SortOrder
    notas?: SortOrder
  }

  export type consultasSumOrderByAggregateInput = {
    id?: SortOrder
    paciente_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type contactos_emergenciaCountOrderByAggregateInput = {
    id?: SortOrder
    paciente_id?: SortOrder
    nombre?: SortOrder
    relacion?: SortOrder
    telefono?: SortOrder
  }

  export type contactos_emergenciaAvgOrderByAggregateInput = {
    id?: SortOrder
    paciente_id?: SortOrder
  }

  export type contactos_emergenciaMaxOrderByAggregateInput = {
    id?: SortOrder
    paciente_id?: SortOrder
    nombre?: SortOrder
    relacion?: SortOrder
    telefono?: SortOrder
  }

  export type contactos_emergenciaMinOrderByAggregateInput = {
    id?: SortOrder
    paciente_id?: SortOrder
    nombre?: SortOrder
    relacion?: SortOrder
    telefono?: SortOrder
  }

  export type contactos_emergenciaSumOrderByAggregateInput = {
    id?: SortOrder
    paciente_id?: SortOrder
  }

  export type enfermedadesCountOrderByAggregateInput = {
    id?: SortOrder
    paciente_id?: SortOrder
    enfermedad?: SortOrder
  }

  export type enfermedadesAvgOrderByAggregateInput = {
    id?: SortOrder
    paciente_id?: SortOrder
  }

  export type enfermedadesMaxOrderByAggregateInput = {
    id?: SortOrder
    paciente_id?: SortOrder
    enfermedad?: SortOrder
  }

  export type enfermedadesMinOrderByAggregateInput = {
    id?: SortOrder
    paciente_id?: SortOrder
    enfermedad?: SortOrder
  }

  export type enfermedadesSumOrderByAggregateInput = {
    id?: SortOrder
    paciente_id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type historial_cirugiasCountOrderByAggregateInput = {
    id?: SortOrder
    paciente_id?: SortOrder
    cirugia?: SortOrder
    fecha?: SortOrder
    observaciones?: SortOrder
  }

  export type historial_cirugiasAvgOrderByAggregateInput = {
    id?: SortOrder
    paciente_id?: SortOrder
  }

  export type historial_cirugiasMaxOrderByAggregateInput = {
    id?: SortOrder
    paciente_id?: SortOrder
    cirugia?: SortOrder
    fecha?: SortOrder
    observaciones?: SortOrder
  }

  export type historial_cirugiasMinOrderByAggregateInput = {
    id?: SortOrder
    paciente_id?: SortOrder
    cirugia?: SortOrder
    fecha?: SortOrder
    observaciones?: SortOrder
  }

  export type historial_cirugiasSumOrderByAggregateInput = {
    id?: SortOrder
    paciente_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type medicamentos_actualesCountOrderByAggregateInput = {
    id?: SortOrder
    paciente_id?: SortOrder
    medicamento?: SortOrder
    dosis?: SortOrder
    frecuencia?: SortOrder
    via_administracion?: SortOrder
  }

  export type medicamentos_actualesAvgOrderByAggregateInput = {
    id?: SortOrder
    paciente_id?: SortOrder
  }

  export type medicamentos_actualesMaxOrderByAggregateInput = {
    id?: SortOrder
    paciente_id?: SortOrder
    medicamento?: SortOrder
    dosis?: SortOrder
    frecuencia?: SortOrder
    via_administracion?: SortOrder
  }

  export type medicamentos_actualesMinOrderByAggregateInput = {
    id?: SortOrder
    paciente_id?: SortOrder
    medicamento?: SortOrder
    dosis?: SortOrder
    frecuencia?: SortOrder
    via_administracion?: SortOrder
  }

  export type medicamentos_actualesSumOrderByAggregateInput = {
    id?: SortOrder
    paciente_id?: SortOrder
  }

  export type AlergiasListRelationFilter = {
    every?: alergiasWhereInput
    some?: alergiasWhereInput
    none?: alergiasWhereInput
  }

  export type ConsultasListRelationFilter = {
    every?: consultasWhereInput
    some?: consultasWhereInput
    none?: consultasWhereInput
  }

  export type Contactos_emergenciaListRelationFilter = {
    every?: contactos_emergenciaWhereInput
    some?: contactos_emergenciaWhereInput
    none?: contactos_emergenciaWhereInput
  }

  export type EnfermedadesListRelationFilter = {
    every?: enfermedadesWhereInput
    some?: enfermedadesWhereInput
    none?: enfermedadesWhereInput
  }

  export type Historial_cirugiasListRelationFilter = {
    every?: historial_cirugiasWhereInput
    some?: historial_cirugiasWhereInput
    none?: historial_cirugiasWhereInput
  }

  export type Medicamentos_actualesListRelationFilter = {
    every?: medicamentos_actualesWhereInput
    some?: medicamentos_actualesWhereInput
    none?: medicamentos_actualesWhereInput
  }

  export type Tipos_sangreNullableScalarRelationFilter = {
    is?: tipos_sangreWhereInput | null
    isNot?: tipos_sangreWhereInput | null
  }

  export type Tutores_legalesNullableScalarRelationFilter = {
    is?: tutores_legalesWhereInput | null
    isNot?: tutores_legalesWhereInput | null
  }

  export type alergiasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type consultasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type contactos_emergenciaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type enfermedadesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type historial_cirugiasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type medicamentos_actualesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pacientesCountOrderByAggregateInput = {
    id?: SortOrder
    dni?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    tipo_sangre_id?: SortOrder
    fecha_nacimiento?: SortOrder
    numero_telefono?: SortOrder
    email?: SortOrder
    obra_social?: SortOrder
    tutor_legal_id?: SortOrder
  }

  export type pacientesAvgOrderByAggregateInput = {
    id?: SortOrder
    tipo_sangre_id?: SortOrder
    tutor_legal_id?: SortOrder
  }

  export type pacientesMaxOrderByAggregateInput = {
    id?: SortOrder
    dni?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    tipo_sangre_id?: SortOrder
    fecha_nacimiento?: SortOrder
    numero_telefono?: SortOrder
    email?: SortOrder
    obra_social?: SortOrder
    tutor_legal_id?: SortOrder
  }

  export type pacientesMinOrderByAggregateInput = {
    id?: SortOrder
    dni?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    tipo_sangre_id?: SortOrder
    fecha_nacimiento?: SortOrder
    numero_telefono?: SortOrder
    email?: SortOrder
    obra_social?: SortOrder
    tutor_legal_id?: SortOrder
  }

  export type pacientesSumOrderByAggregateInput = {
    id?: SortOrder
    tipo_sangre_id?: SortOrder
    tutor_legal_id?: SortOrder
  }

  export type PacientesListRelationFilter = {
    every?: pacientesWhereInput
    some?: pacientesWhereInput
    none?: pacientesWhereInput
  }

  export type pacientesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tipos_sangreCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
  }

  export type tipos_sangreAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tipos_sangreMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
  }

  export type tipos_sangreMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
  }

  export type tipos_sangreSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tutores_legalesCountOrderByAggregateInput = {
    id?: SortOrder
    dni?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
  }

  export type tutores_legalesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tutores_legalesMaxOrderByAggregateInput = {
    id?: SortOrder
    dni?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
  }

  export type tutores_legalesMinOrderByAggregateInput = {
    id?: SortOrder
    dni?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
  }

  export type tutores_legalesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type pacientesCreateNestedOneWithoutAlergiasInput = {
    create?: XOR<pacientesCreateWithoutAlergiasInput, pacientesUncheckedCreateWithoutAlergiasInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutAlergiasInput
    connect?: pacientesWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type pacientesUpdateOneWithoutAlergiasNestedInput = {
    create?: XOR<pacientesCreateWithoutAlergiasInput, pacientesUncheckedCreateWithoutAlergiasInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutAlergiasInput
    upsert?: pacientesUpsertWithoutAlergiasInput
    disconnect?: pacientesWhereInput | boolean
    delete?: pacientesWhereInput | boolean
    connect?: pacientesWhereUniqueInput
    update?: XOR<XOR<pacientesUpdateToOneWithWhereWithoutAlergiasInput, pacientesUpdateWithoutAlergiasInput>, pacientesUncheckedUpdateWithoutAlergiasInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type consultasCreateimagenesInput = {
    set: string[]
  }

  export type pacientesCreateNestedOneWithoutConsultasInput = {
    create?: XOR<pacientesCreateWithoutConsultasInput, pacientesUncheckedCreateWithoutConsultasInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutConsultasInput
    connect?: pacientesWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type consultasUpdateimagenesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type pacientesUpdateOneWithoutConsultasNestedInput = {
    create?: XOR<pacientesCreateWithoutConsultasInput, pacientesUncheckedCreateWithoutConsultasInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutConsultasInput
    upsert?: pacientesUpsertWithoutConsultasInput
    disconnect?: pacientesWhereInput | boolean
    delete?: pacientesWhereInput | boolean
    connect?: pacientesWhereUniqueInput
    update?: XOR<XOR<pacientesUpdateToOneWithWhereWithoutConsultasInput, pacientesUpdateWithoutConsultasInput>, pacientesUncheckedUpdateWithoutConsultasInput>
  }

  export type pacientesCreateNestedOneWithoutContactos_emergenciaInput = {
    create?: XOR<pacientesCreateWithoutContactos_emergenciaInput, pacientesUncheckedCreateWithoutContactos_emergenciaInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutContactos_emergenciaInput
    connect?: pacientesWhereUniqueInput
  }

  export type pacientesUpdateOneWithoutContactos_emergenciaNestedInput = {
    create?: XOR<pacientesCreateWithoutContactos_emergenciaInput, pacientesUncheckedCreateWithoutContactos_emergenciaInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutContactos_emergenciaInput
    upsert?: pacientesUpsertWithoutContactos_emergenciaInput
    disconnect?: pacientesWhereInput | boolean
    delete?: pacientesWhereInput | boolean
    connect?: pacientesWhereUniqueInput
    update?: XOR<XOR<pacientesUpdateToOneWithWhereWithoutContactos_emergenciaInput, pacientesUpdateWithoutContactos_emergenciaInput>, pacientesUncheckedUpdateWithoutContactos_emergenciaInput>
  }

  export type pacientesCreateNestedOneWithoutEnfermedadesInput = {
    create?: XOR<pacientesCreateWithoutEnfermedadesInput, pacientesUncheckedCreateWithoutEnfermedadesInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutEnfermedadesInput
    connect?: pacientesWhereUniqueInput
  }

  export type pacientesUpdateOneWithoutEnfermedadesNestedInput = {
    create?: XOR<pacientesCreateWithoutEnfermedadesInput, pacientesUncheckedCreateWithoutEnfermedadesInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutEnfermedadesInput
    upsert?: pacientesUpsertWithoutEnfermedadesInput
    disconnect?: pacientesWhereInput | boolean
    delete?: pacientesWhereInput | boolean
    connect?: pacientesWhereUniqueInput
    update?: XOR<XOR<pacientesUpdateToOneWithWhereWithoutEnfermedadesInput, pacientesUpdateWithoutEnfermedadesInput>, pacientesUncheckedUpdateWithoutEnfermedadesInput>
  }

  export type pacientesCreateNestedOneWithoutHistorial_cirugiasInput = {
    create?: XOR<pacientesCreateWithoutHistorial_cirugiasInput, pacientesUncheckedCreateWithoutHistorial_cirugiasInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutHistorial_cirugiasInput
    connect?: pacientesWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type pacientesUpdateOneWithoutHistorial_cirugiasNestedInput = {
    create?: XOR<pacientesCreateWithoutHistorial_cirugiasInput, pacientesUncheckedCreateWithoutHistorial_cirugiasInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutHistorial_cirugiasInput
    upsert?: pacientesUpsertWithoutHistorial_cirugiasInput
    disconnect?: pacientesWhereInput | boolean
    delete?: pacientesWhereInput | boolean
    connect?: pacientesWhereUniqueInput
    update?: XOR<XOR<pacientesUpdateToOneWithWhereWithoutHistorial_cirugiasInput, pacientesUpdateWithoutHistorial_cirugiasInput>, pacientesUncheckedUpdateWithoutHistorial_cirugiasInput>
  }

  export type pacientesCreateNestedOneWithoutMedicamentos_actualesInput = {
    create?: XOR<pacientesCreateWithoutMedicamentos_actualesInput, pacientesUncheckedCreateWithoutMedicamentos_actualesInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutMedicamentos_actualesInput
    connect?: pacientesWhereUniqueInput
  }

  export type pacientesUpdateOneWithoutMedicamentos_actualesNestedInput = {
    create?: XOR<pacientesCreateWithoutMedicamentos_actualesInput, pacientesUncheckedCreateWithoutMedicamentos_actualesInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutMedicamentos_actualesInput
    upsert?: pacientesUpsertWithoutMedicamentos_actualesInput
    disconnect?: pacientesWhereInput | boolean
    delete?: pacientesWhereInput | boolean
    connect?: pacientesWhereUniqueInput
    update?: XOR<XOR<pacientesUpdateToOneWithWhereWithoutMedicamentos_actualesInput, pacientesUpdateWithoutMedicamentos_actualesInput>, pacientesUncheckedUpdateWithoutMedicamentos_actualesInput>
  }

  export type alergiasCreateNestedManyWithoutPacientesInput = {
    create?: XOR<alergiasCreateWithoutPacientesInput, alergiasUncheckedCreateWithoutPacientesInput> | alergiasCreateWithoutPacientesInput[] | alergiasUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: alergiasCreateOrConnectWithoutPacientesInput | alergiasCreateOrConnectWithoutPacientesInput[]
    createMany?: alergiasCreateManyPacientesInputEnvelope
    connect?: alergiasWhereUniqueInput | alergiasWhereUniqueInput[]
  }

  export type consultasCreateNestedManyWithoutPacientesInput = {
    create?: XOR<consultasCreateWithoutPacientesInput, consultasUncheckedCreateWithoutPacientesInput> | consultasCreateWithoutPacientesInput[] | consultasUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: consultasCreateOrConnectWithoutPacientesInput | consultasCreateOrConnectWithoutPacientesInput[]
    createMany?: consultasCreateManyPacientesInputEnvelope
    connect?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
  }

  export type contactos_emergenciaCreateNestedManyWithoutPacientesInput = {
    create?: XOR<contactos_emergenciaCreateWithoutPacientesInput, contactos_emergenciaUncheckedCreateWithoutPacientesInput> | contactos_emergenciaCreateWithoutPacientesInput[] | contactos_emergenciaUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: contactos_emergenciaCreateOrConnectWithoutPacientesInput | contactos_emergenciaCreateOrConnectWithoutPacientesInput[]
    createMany?: contactos_emergenciaCreateManyPacientesInputEnvelope
    connect?: contactos_emergenciaWhereUniqueInput | contactos_emergenciaWhereUniqueInput[]
  }

  export type enfermedadesCreateNestedManyWithoutPacientesInput = {
    create?: XOR<enfermedadesCreateWithoutPacientesInput, enfermedadesUncheckedCreateWithoutPacientesInput> | enfermedadesCreateWithoutPacientesInput[] | enfermedadesUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: enfermedadesCreateOrConnectWithoutPacientesInput | enfermedadesCreateOrConnectWithoutPacientesInput[]
    createMany?: enfermedadesCreateManyPacientesInputEnvelope
    connect?: enfermedadesWhereUniqueInput | enfermedadesWhereUniqueInput[]
  }

  export type historial_cirugiasCreateNestedManyWithoutPacientesInput = {
    create?: XOR<historial_cirugiasCreateWithoutPacientesInput, historial_cirugiasUncheckedCreateWithoutPacientesInput> | historial_cirugiasCreateWithoutPacientesInput[] | historial_cirugiasUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: historial_cirugiasCreateOrConnectWithoutPacientesInput | historial_cirugiasCreateOrConnectWithoutPacientesInput[]
    createMany?: historial_cirugiasCreateManyPacientesInputEnvelope
    connect?: historial_cirugiasWhereUniqueInput | historial_cirugiasWhereUniqueInput[]
  }

  export type medicamentos_actualesCreateNestedManyWithoutPacientesInput = {
    create?: XOR<medicamentos_actualesCreateWithoutPacientesInput, medicamentos_actualesUncheckedCreateWithoutPacientesInput> | medicamentos_actualesCreateWithoutPacientesInput[] | medicamentos_actualesUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: medicamentos_actualesCreateOrConnectWithoutPacientesInput | medicamentos_actualesCreateOrConnectWithoutPacientesInput[]
    createMany?: medicamentos_actualesCreateManyPacientesInputEnvelope
    connect?: medicamentos_actualesWhereUniqueInput | medicamentos_actualesWhereUniqueInput[]
  }

  export type tipos_sangreCreateNestedOneWithoutPacientesInput = {
    create?: XOR<tipos_sangreCreateWithoutPacientesInput, tipos_sangreUncheckedCreateWithoutPacientesInput>
    connectOrCreate?: tipos_sangreCreateOrConnectWithoutPacientesInput
    connect?: tipos_sangreWhereUniqueInput
  }

  export type tutores_legalesCreateNestedOneWithoutPacientesInput = {
    create?: XOR<tutores_legalesCreateWithoutPacientesInput, tutores_legalesUncheckedCreateWithoutPacientesInput>
    connectOrCreate?: tutores_legalesCreateOrConnectWithoutPacientesInput
    connect?: tutores_legalesWhereUniqueInput
  }

  export type alergiasUncheckedCreateNestedManyWithoutPacientesInput = {
    create?: XOR<alergiasCreateWithoutPacientesInput, alergiasUncheckedCreateWithoutPacientesInput> | alergiasCreateWithoutPacientesInput[] | alergiasUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: alergiasCreateOrConnectWithoutPacientesInput | alergiasCreateOrConnectWithoutPacientesInput[]
    createMany?: alergiasCreateManyPacientesInputEnvelope
    connect?: alergiasWhereUniqueInput | alergiasWhereUniqueInput[]
  }

  export type consultasUncheckedCreateNestedManyWithoutPacientesInput = {
    create?: XOR<consultasCreateWithoutPacientesInput, consultasUncheckedCreateWithoutPacientesInput> | consultasCreateWithoutPacientesInput[] | consultasUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: consultasCreateOrConnectWithoutPacientesInput | consultasCreateOrConnectWithoutPacientesInput[]
    createMany?: consultasCreateManyPacientesInputEnvelope
    connect?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
  }

  export type contactos_emergenciaUncheckedCreateNestedManyWithoutPacientesInput = {
    create?: XOR<contactos_emergenciaCreateWithoutPacientesInput, contactos_emergenciaUncheckedCreateWithoutPacientesInput> | contactos_emergenciaCreateWithoutPacientesInput[] | contactos_emergenciaUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: contactos_emergenciaCreateOrConnectWithoutPacientesInput | contactos_emergenciaCreateOrConnectWithoutPacientesInput[]
    createMany?: contactos_emergenciaCreateManyPacientesInputEnvelope
    connect?: contactos_emergenciaWhereUniqueInput | contactos_emergenciaWhereUniqueInput[]
  }

  export type enfermedadesUncheckedCreateNestedManyWithoutPacientesInput = {
    create?: XOR<enfermedadesCreateWithoutPacientesInput, enfermedadesUncheckedCreateWithoutPacientesInput> | enfermedadesCreateWithoutPacientesInput[] | enfermedadesUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: enfermedadesCreateOrConnectWithoutPacientesInput | enfermedadesCreateOrConnectWithoutPacientesInput[]
    createMany?: enfermedadesCreateManyPacientesInputEnvelope
    connect?: enfermedadesWhereUniqueInput | enfermedadesWhereUniqueInput[]
  }

  export type historial_cirugiasUncheckedCreateNestedManyWithoutPacientesInput = {
    create?: XOR<historial_cirugiasCreateWithoutPacientesInput, historial_cirugiasUncheckedCreateWithoutPacientesInput> | historial_cirugiasCreateWithoutPacientesInput[] | historial_cirugiasUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: historial_cirugiasCreateOrConnectWithoutPacientesInput | historial_cirugiasCreateOrConnectWithoutPacientesInput[]
    createMany?: historial_cirugiasCreateManyPacientesInputEnvelope
    connect?: historial_cirugiasWhereUniqueInput | historial_cirugiasWhereUniqueInput[]
  }

  export type medicamentos_actualesUncheckedCreateNestedManyWithoutPacientesInput = {
    create?: XOR<medicamentos_actualesCreateWithoutPacientesInput, medicamentos_actualesUncheckedCreateWithoutPacientesInput> | medicamentos_actualesCreateWithoutPacientesInput[] | medicamentos_actualesUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: medicamentos_actualesCreateOrConnectWithoutPacientesInput | medicamentos_actualesCreateOrConnectWithoutPacientesInput[]
    createMany?: medicamentos_actualesCreateManyPacientesInputEnvelope
    connect?: medicamentos_actualesWhereUniqueInput | medicamentos_actualesWhereUniqueInput[]
  }

  export type alergiasUpdateManyWithoutPacientesNestedInput = {
    create?: XOR<alergiasCreateWithoutPacientesInput, alergiasUncheckedCreateWithoutPacientesInput> | alergiasCreateWithoutPacientesInput[] | alergiasUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: alergiasCreateOrConnectWithoutPacientesInput | alergiasCreateOrConnectWithoutPacientesInput[]
    upsert?: alergiasUpsertWithWhereUniqueWithoutPacientesInput | alergiasUpsertWithWhereUniqueWithoutPacientesInput[]
    createMany?: alergiasCreateManyPacientesInputEnvelope
    set?: alergiasWhereUniqueInput | alergiasWhereUniqueInput[]
    disconnect?: alergiasWhereUniqueInput | alergiasWhereUniqueInput[]
    delete?: alergiasWhereUniqueInput | alergiasWhereUniqueInput[]
    connect?: alergiasWhereUniqueInput | alergiasWhereUniqueInput[]
    update?: alergiasUpdateWithWhereUniqueWithoutPacientesInput | alergiasUpdateWithWhereUniqueWithoutPacientesInput[]
    updateMany?: alergiasUpdateManyWithWhereWithoutPacientesInput | alergiasUpdateManyWithWhereWithoutPacientesInput[]
    deleteMany?: alergiasScalarWhereInput | alergiasScalarWhereInput[]
  }

  export type consultasUpdateManyWithoutPacientesNestedInput = {
    create?: XOR<consultasCreateWithoutPacientesInput, consultasUncheckedCreateWithoutPacientesInput> | consultasCreateWithoutPacientesInput[] | consultasUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: consultasCreateOrConnectWithoutPacientesInput | consultasCreateOrConnectWithoutPacientesInput[]
    upsert?: consultasUpsertWithWhereUniqueWithoutPacientesInput | consultasUpsertWithWhereUniqueWithoutPacientesInput[]
    createMany?: consultasCreateManyPacientesInputEnvelope
    set?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
    disconnect?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
    delete?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
    connect?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
    update?: consultasUpdateWithWhereUniqueWithoutPacientesInput | consultasUpdateWithWhereUniqueWithoutPacientesInput[]
    updateMany?: consultasUpdateManyWithWhereWithoutPacientesInput | consultasUpdateManyWithWhereWithoutPacientesInput[]
    deleteMany?: consultasScalarWhereInput | consultasScalarWhereInput[]
  }

  export type contactos_emergenciaUpdateManyWithoutPacientesNestedInput = {
    create?: XOR<contactos_emergenciaCreateWithoutPacientesInput, contactos_emergenciaUncheckedCreateWithoutPacientesInput> | contactos_emergenciaCreateWithoutPacientesInput[] | contactos_emergenciaUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: contactos_emergenciaCreateOrConnectWithoutPacientesInput | contactos_emergenciaCreateOrConnectWithoutPacientesInput[]
    upsert?: contactos_emergenciaUpsertWithWhereUniqueWithoutPacientesInput | contactos_emergenciaUpsertWithWhereUniqueWithoutPacientesInput[]
    createMany?: contactos_emergenciaCreateManyPacientesInputEnvelope
    set?: contactos_emergenciaWhereUniqueInput | contactos_emergenciaWhereUniqueInput[]
    disconnect?: contactos_emergenciaWhereUniqueInput | contactos_emergenciaWhereUniqueInput[]
    delete?: contactos_emergenciaWhereUniqueInput | contactos_emergenciaWhereUniqueInput[]
    connect?: contactos_emergenciaWhereUniqueInput | contactos_emergenciaWhereUniqueInput[]
    update?: contactos_emergenciaUpdateWithWhereUniqueWithoutPacientesInput | contactos_emergenciaUpdateWithWhereUniqueWithoutPacientesInput[]
    updateMany?: contactos_emergenciaUpdateManyWithWhereWithoutPacientesInput | contactos_emergenciaUpdateManyWithWhereWithoutPacientesInput[]
    deleteMany?: contactos_emergenciaScalarWhereInput | contactos_emergenciaScalarWhereInput[]
  }

  export type enfermedadesUpdateManyWithoutPacientesNestedInput = {
    create?: XOR<enfermedadesCreateWithoutPacientesInput, enfermedadesUncheckedCreateWithoutPacientesInput> | enfermedadesCreateWithoutPacientesInput[] | enfermedadesUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: enfermedadesCreateOrConnectWithoutPacientesInput | enfermedadesCreateOrConnectWithoutPacientesInput[]
    upsert?: enfermedadesUpsertWithWhereUniqueWithoutPacientesInput | enfermedadesUpsertWithWhereUniqueWithoutPacientesInput[]
    createMany?: enfermedadesCreateManyPacientesInputEnvelope
    set?: enfermedadesWhereUniqueInput | enfermedadesWhereUniqueInput[]
    disconnect?: enfermedadesWhereUniqueInput | enfermedadesWhereUniqueInput[]
    delete?: enfermedadesWhereUniqueInput | enfermedadesWhereUniqueInput[]
    connect?: enfermedadesWhereUniqueInput | enfermedadesWhereUniqueInput[]
    update?: enfermedadesUpdateWithWhereUniqueWithoutPacientesInput | enfermedadesUpdateWithWhereUniqueWithoutPacientesInput[]
    updateMany?: enfermedadesUpdateManyWithWhereWithoutPacientesInput | enfermedadesUpdateManyWithWhereWithoutPacientesInput[]
    deleteMany?: enfermedadesScalarWhereInput | enfermedadesScalarWhereInput[]
  }

  export type historial_cirugiasUpdateManyWithoutPacientesNestedInput = {
    create?: XOR<historial_cirugiasCreateWithoutPacientesInput, historial_cirugiasUncheckedCreateWithoutPacientesInput> | historial_cirugiasCreateWithoutPacientesInput[] | historial_cirugiasUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: historial_cirugiasCreateOrConnectWithoutPacientesInput | historial_cirugiasCreateOrConnectWithoutPacientesInput[]
    upsert?: historial_cirugiasUpsertWithWhereUniqueWithoutPacientesInput | historial_cirugiasUpsertWithWhereUniqueWithoutPacientesInput[]
    createMany?: historial_cirugiasCreateManyPacientesInputEnvelope
    set?: historial_cirugiasWhereUniqueInput | historial_cirugiasWhereUniqueInput[]
    disconnect?: historial_cirugiasWhereUniqueInput | historial_cirugiasWhereUniqueInput[]
    delete?: historial_cirugiasWhereUniqueInput | historial_cirugiasWhereUniqueInput[]
    connect?: historial_cirugiasWhereUniqueInput | historial_cirugiasWhereUniqueInput[]
    update?: historial_cirugiasUpdateWithWhereUniqueWithoutPacientesInput | historial_cirugiasUpdateWithWhereUniqueWithoutPacientesInput[]
    updateMany?: historial_cirugiasUpdateManyWithWhereWithoutPacientesInput | historial_cirugiasUpdateManyWithWhereWithoutPacientesInput[]
    deleteMany?: historial_cirugiasScalarWhereInput | historial_cirugiasScalarWhereInput[]
  }

  export type medicamentos_actualesUpdateManyWithoutPacientesNestedInput = {
    create?: XOR<medicamentos_actualesCreateWithoutPacientesInput, medicamentos_actualesUncheckedCreateWithoutPacientesInput> | medicamentos_actualesCreateWithoutPacientesInput[] | medicamentos_actualesUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: medicamentos_actualesCreateOrConnectWithoutPacientesInput | medicamentos_actualesCreateOrConnectWithoutPacientesInput[]
    upsert?: medicamentos_actualesUpsertWithWhereUniqueWithoutPacientesInput | medicamentos_actualesUpsertWithWhereUniqueWithoutPacientesInput[]
    createMany?: medicamentos_actualesCreateManyPacientesInputEnvelope
    set?: medicamentos_actualesWhereUniqueInput | medicamentos_actualesWhereUniqueInput[]
    disconnect?: medicamentos_actualesWhereUniqueInput | medicamentos_actualesWhereUniqueInput[]
    delete?: medicamentos_actualesWhereUniqueInput | medicamentos_actualesWhereUniqueInput[]
    connect?: medicamentos_actualesWhereUniqueInput | medicamentos_actualesWhereUniqueInput[]
    update?: medicamentos_actualesUpdateWithWhereUniqueWithoutPacientesInput | medicamentos_actualesUpdateWithWhereUniqueWithoutPacientesInput[]
    updateMany?: medicamentos_actualesUpdateManyWithWhereWithoutPacientesInput | medicamentos_actualesUpdateManyWithWhereWithoutPacientesInput[]
    deleteMany?: medicamentos_actualesScalarWhereInput | medicamentos_actualesScalarWhereInput[]
  }

  export type tipos_sangreUpdateOneWithoutPacientesNestedInput = {
    create?: XOR<tipos_sangreCreateWithoutPacientesInput, tipos_sangreUncheckedCreateWithoutPacientesInput>
    connectOrCreate?: tipos_sangreCreateOrConnectWithoutPacientesInput
    upsert?: tipos_sangreUpsertWithoutPacientesInput
    disconnect?: tipos_sangreWhereInput | boolean
    delete?: tipos_sangreWhereInput | boolean
    connect?: tipos_sangreWhereUniqueInput
    update?: XOR<XOR<tipos_sangreUpdateToOneWithWhereWithoutPacientesInput, tipos_sangreUpdateWithoutPacientesInput>, tipos_sangreUncheckedUpdateWithoutPacientesInput>
  }

  export type tutores_legalesUpdateOneWithoutPacientesNestedInput = {
    create?: XOR<tutores_legalesCreateWithoutPacientesInput, tutores_legalesUncheckedCreateWithoutPacientesInput>
    connectOrCreate?: tutores_legalesCreateOrConnectWithoutPacientesInput
    upsert?: tutores_legalesUpsertWithoutPacientesInput
    disconnect?: tutores_legalesWhereInput | boolean
    delete?: tutores_legalesWhereInput | boolean
    connect?: tutores_legalesWhereUniqueInput
    update?: XOR<XOR<tutores_legalesUpdateToOneWithWhereWithoutPacientesInput, tutores_legalesUpdateWithoutPacientesInput>, tutores_legalesUncheckedUpdateWithoutPacientesInput>
  }

  export type alergiasUncheckedUpdateManyWithoutPacientesNestedInput = {
    create?: XOR<alergiasCreateWithoutPacientesInput, alergiasUncheckedCreateWithoutPacientesInput> | alergiasCreateWithoutPacientesInput[] | alergiasUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: alergiasCreateOrConnectWithoutPacientesInput | alergiasCreateOrConnectWithoutPacientesInput[]
    upsert?: alergiasUpsertWithWhereUniqueWithoutPacientesInput | alergiasUpsertWithWhereUniqueWithoutPacientesInput[]
    createMany?: alergiasCreateManyPacientesInputEnvelope
    set?: alergiasWhereUniqueInput | alergiasWhereUniqueInput[]
    disconnect?: alergiasWhereUniqueInput | alergiasWhereUniqueInput[]
    delete?: alergiasWhereUniqueInput | alergiasWhereUniqueInput[]
    connect?: alergiasWhereUniqueInput | alergiasWhereUniqueInput[]
    update?: alergiasUpdateWithWhereUniqueWithoutPacientesInput | alergiasUpdateWithWhereUniqueWithoutPacientesInput[]
    updateMany?: alergiasUpdateManyWithWhereWithoutPacientesInput | alergiasUpdateManyWithWhereWithoutPacientesInput[]
    deleteMany?: alergiasScalarWhereInput | alergiasScalarWhereInput[]
  }

  export type consultasUncheckedUpdateManyWithoutPacientesNestedInput = {
    create?: XOR<consultasCreateWithoutPacientesInput, consultasUncheckedCreateWithoutPacientesInput> | consultasCreateWithoutPacientesInput[] | consultasUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: consultasCreateOrConnectWithoutPacientesInput | consultasCreateOrConnectWithoutPacientesInput[]
    upsert?: consultasUpsertWithWhereUniqueWithoutPacientesInput | consultasUpsertWithWhereUniqueWithoutPacientesInput[]
    createMany?: consultasCreateManyPacientesInputEnvelope
    set?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
    disconnect?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
    delete?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
    connect?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
    update?: consultasUpdateWithWhereUniqueWithoutPacientesInput | consultasUpdateWithWhereUniqueWithoutPacientesInput[]
    updateMany?: consultasUpdateManyWithWhereWithoutPacientesInput | consultasUpdateManyWithWhereWithoutPacientesInput[]
    deleteMany?: consultasScalarWhereInput | consultasScalarWhereInput[]
  }

  export type contactos_emergenciaUncheckedUpdateManyWithoutPacientesNestedInput = {
    create?: XOR<contactos_emergenciaCreateWithoutPacientesInput, contactos_emergenciaUncheckedCreateWithoutPacientesInput> | contactos_emergenciaCreateWithoutPacientesInput[] | contactos_emergenciaUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: contactos_emergenciaCreateOrConnectWithoutPacientesInput | contactos_emergenciaCreateOrConnectWithoutPacientesInput[]
    upsert?: contactos_emergenciaUpsertWithWhereUniqueWithoutPacientesInput | contactos_emergenciaUpsertWithWhereUniqueWithoutPacientesInput[]
    createMany?: contactos_emergenciaCreateManyPacientesInputEnvelope
    set?: contactos_emergenciaWhereUniqueInput | contactos_emergenciaWhereUniqueInput[]
    disconnect?: contactos_emergenciaWhereUniqueInput | contactos_emergenciaWhereUniqueInput[]
    delete?: contactos_emergenciaWhereUniqueInput | contactos_emergenciaWhereUniqueInput[]
    connect?: contactos_emergenciaWhereUniqueInput | contactos_emergenciaWhereUniqueInput[]
    update?: contactos_emergenciaUpdateWithWhereUniqueWithoutPacientesInput | contactos_emergenciaUpdateWithWhereUniqueWithoutPacientesInput[]
    updateMany?: contactos_emergenciaUpdateManyWithWhereWithoutPacientesInput | contactos_emergenciaUpdateManyWithWhereWithoutPacientesInput[]
    deleteMany?: contactos_emergenciaScalarWhereInput | contactos_emergenciaScalarWhereInput[]
  }

  export type enfermedadesUncheckedUpdateManyWithoutPacientesNestedInput = {
    create?: XOR<enfermedadesCreateWithoutPacientesInput, enfermedadesUncheckedCreateWithoutPacientesInput> | enfermedadesCreateWithoutPacientesInput[] | enfermedadesUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: enfermedadesCreateOrConnectWithoutPacientesInput | enfermedadesCreateOrConnectWithoutPacientesInput[]
    upsert?: enfermedadesUpsertWithWhereUniqueWithoutPacientesInput | enfermedadesUpsertWithWhereUniqueWithoutPacientesInput[]
    createMany?: enfermedadesCreateManyPacientesInputEnvelope
    set?: enfermedadesWhereUniqueInput | enfermedadesWhereUniqueInput[]
    disconnect?: enfermedadesWhereUniqueInput | enfermedadesWhereUniqueInput[]
    delete?: enfermedadesWhereUniqueInput | enfermedadesWhereUniqueInput[]
    connect?: enfermedadesWhereUniqueInput | enfermedadesWhereUniqueInput[]
    update?: enfermedadesUpdateWithWhereUniqueWithoutPacientesInput | enfermedadesUpdateWithWhereUniqueWithoutPacientesInput[]
    updateMany?: enfermedadesUpdateManyWithWhereWithoutPacientesInput | enfermedadesUpdateManyWithWhereWithoutPacientesInput[]
    deleteMany?: enfermedadesScalarWhereInput | enfermedadesScalarWhereInput[]
  }

  export type historial_cirugiasUncheckedUpdateManyWithoutPacientesNestedInput = {
    create?: XOR<historial_cirugiasCreateWithoutPacientesInput, historial_cirugiasUncheckedCreateWithoutPacientesInput> | historial_cirugiasCreateWithoutPacientesInput[] | historial_cirugiasUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: historial_cirugiasCreateOrConnectWithoutPacientesInput | historial_cirugiasCreateOrConnectWithoutPacientesInput[]
    upsert?: historial_cirugiasUpsertWithWhereUniqueWithoutPacientesInput | historial_cirugiasUpsertWithWhereUniqueWithoutPacientesInput[]
    createMany?: historial_cirugiasCreateManyPacientesInputEnvelope
    set?: historial_cirugiasWhereUniqueInput | historial_cirugiasWhereUniqueInput[]
    disconnect?: historial_cirugiasWhereUniqueInput | historial_cirugiasWhereUniqueInput[]
    delete?: historial_cirugiasWhereUniqueInput | historial_cirugiasWhereUniqueInput[]
    connect?: historial_cirugiasWhereUniqueInput | historial_cirugiasWhereUniqueInput[]
    update?: historial_cirugiasUpdateWithWhereUniqueWithoutPacientesInput | historial_cirugiasUpdateWithWhereUniqueWithoutPacientesInput[]
    updateMany?: historial_cirugiasUpdateManyWithWhereWithoutPacientesInput | historial_cirugiasUpdateManyWithWhereWithoutPacientesInput[]
    deleteMany?: historial_cirugiasScalarWhereInput | historial_cirugiasScalarWhereInput[]
  }

  export type medicamentos_actualesUncheckedUpdateManyWithoutPacientesNestedInput = {
    create?: XOR<medicamentos_actualesCreateWithoutPacientesInput, medicamentos_actualesUncheckedCreateWithoutPacientesInput> | medicamentos_actualesCreateWithoutPacientesInput[] | medicamentos_actualesUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: medicamentos_actualesCreateOrConnectWithoutPacientesInput | medicamentos_actualesCreateOrConnectWithoutPacientesInput[]
    upsert?: medicamentos_actualesUpsertWithWhereUniqueWithoutPacientesInput | medicamentos_actualesUpsertWithWhereUniqueWithoutPacientesInput[]
    createMany?: medicamentos_actualesCreateManyPacientesInputEnvelope
    set?: medicamentos_actualesWhereUniqueInput | medicamentos_actualesWhereUniqueInput[]
    disconnect?: medicamentos_actualesWhereUniqueInput | medicamentos_actualesWhereUniqueInput[]
    delete?: medicamentos_actualesWhereUniqueInput | medicamentos_actualesWhereUniqueInput[]
    connect?: medicamentos_actualesWhereUniqueInput | medicamentos_actualesWhereUniqueInput[]
    update?: medicamentos_actualesUpdateWithWhereUniqueWithoutPacientesInput | medicamentos_actualesUpdateWithWhereUniqueWithoutPacientesInput[]
    updateMany?: medicamentos_actualesUpdateManyWithWhereWithoutPacientesInput | medicamentos_actualesUpdateManyWithWhereWithoutPacientesInput[]
    deleteMany?: medicamentos_actualesScalarWhereInput | medicamentos_actualesScalarWhereInput[]
  }

  export type pacientesCreateNestedManyWithoutTipos_sangreInput = {
    create?: XOR<pacientesCreateWithoutTipos_sangreInput, pacientesUncheckedCreateWithoutTipos_sangreInput> | pacientesCreateWithoutTipos_sangreInput[] | pacientesUncheckedCreateWithoutTipos_sangreInput[]
    connectOrCreate?: pacientesCreateOrConnectWithoutTipos_sangreInput | pacientesCreateOrConnectWithoutTipos_sangreInput[]
    createMany?: pacientesCreateManyTipos_sangreInputEnvelope
    connect?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
  }

  export type pacientesUncheckedCreateNestedManyWithoutTipos_sangreInput = {
    create?: XOR<pacientesCreateWithoutTipos_sangreInput, pacientesUncheckedCreateWithoutTipos_sangreInput> | pacientesCreateWithoutTipos_sangreInput[] | pacientesUncheckedCreateWithoutTipos_sangreInput[]
    connectOrCreate?: pacientesCreateOrConnectWithoutTipos_sangreInput | pacientesCreateOrConnectWithoutTipos_sangreInput[]
    createMany?: pacientesCreateManyTipos_sangreInputEnvelope
    connect?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
  }

  export type pacientesUpdateManyWithoutTipos_sangreNestedInput = {
    create?: XOR<pacientesCreateWithoutTipos_sangreInput, pacientesUncheckedCreateWithoutTipos_sangreInput> | pacientesCreateWithoutTipos_sangreInput[] | pacientesUncheckedCreateWithoutTipos_sangreInput[]
    connectOrCreate?: pacientesCreateOrConnectWithoutTipos_sangreInput | pacientesCreateOrConnectWithoutTipos_sangreInput[]
    upsert?: pacientesUpsertWithWhereUniqueWithoutTipos_sangreInput | pacientesUpsertWithWhereUniqueWithoutTipos_sangreInput[]
    createMany?: pacientesCreateManyTipos_sangreInputEnvelope
    set?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
    disconnect?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
    delete?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
    connect?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
    update?: pacientesUpdateWithWhereUniqueWithoutTipos_sangreInput | pacientesUpdateWithWhereUniqueWithoutTipos_sangreInput[]
    updateMany?: pacientesUpdateManyWithWhereWithoutTipos_sangreInput | pacientesUpdateManyWithWhereWithoutTipos_sangreInput[]
    deleteMany?: pacientesScalarWhereInput | pacientesScalarWhereInput[]
  }

  export type pacientesUncheckedUpdateManyWithoutTipos_sangreNestedInput = {
    create?: XOR<pacientesCreateWithoutTipos_sangreInput, pacientesUncheckedCreateWithoutTipos_sangreInput> | pacientesCreateWithoutTipos_sangreInput[] | pacientesUncheckedCreateWithoutTipos_sangreInput[]
    connectOrCreate?: pacientesCreateOrConnectWithoutTipos_sangreInput | pacientesCreateOrConnectWithoutTipos_sangreInput[]
    upsert?: pacientesUpsertWithWhereUniqueWithoutTipos_sangreInput | pacientesUpsertWithWhereUniqueWithoutTipos_sangreInput[]
    createMany?: pacientesCreateManyTipos_sangreInputEnvelope
    set?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
    disconnect?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
    delete?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
    connect?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
    update?: pacientesUpdateWithWhereUniqueWithoutTipos_sangreInput | pacientesUpdateWithWhereUniqueWithoutTipos_sangreInput[]
    updateMany?: pacientesUpdateManyWithWhereWithoutTipos_sangreInput | pacientesUpdateManyWithWhereWithoutTipos_sangreInput[]
    deleteMany?: pacientesScalarWhereInput | pacientesScalarWhereInput[]
  }

  export type pacientesCreateNestedManyWithoutTutores_legalesInput = {
    create?: XOR<pacientesCreateWithoutTutores_legalesInput, pacientesUncheckedCreateWithoutTutores_legalesInput> | pacientesCreateWithoutTutores_legalesInput[] | pacientesUncheckedCreateWithoutTutores_legalesInput[]
    connectOrCreate?: pacientesCreateOrConnectWithoutTutores_legalesInput | pacientesCreateOrConnectWithoutTutores_legalesInput[]
    createMany?: pacientesCreateManyTutores_legalesInputEnvelope
    connect?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
  }

  export type pacientesUncheckedCreateNestedManyWithoutTutores_legalesInput = {
    create?: XOR<pacientesCreateWithoutTutores_legalesInput, pacientesUncheckedCreateWithoutTutores_legalesInput> | pacientesCreateWithoutTutores_legalesInput[] | pacientesUncheckedCreateWithoutTutores_legalesInput[]
    connectOrCreate?: pacientesCreateOrConnectWithoutTutores_legalesInput | pacientesCreateOrConnectWithoutTutores_legalesInput[]
    createMany?: pacientesCreateManyTutores_legalesInputEnvelope
    connect?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
  }

  export type pacientesUpdateManyWithoutTutores_legalesNestedInput = {
    create?: XOR<pacientesCreateWithoutTutores_legalesInput, pacientesUncheckedCreateWithoutTutores_legalesInput> | pacientesCreateWithoutTutores_legalesInput[] | pacientesUncheckedCreateWithoutTutores_legalesInput[]
    connectOrCreate?: pacientesCreateOrConnectWithoutTutores_legalesInput | pacientesCreateOrConnectWithoutTutores_legalesInput[]
    upsert?: pacientesUpsertWithWhereUniqueWithoutTutores_legalesInput | pacientesUpsertWithWhereUniqueWithoutTutores_legalesInput[]
    createMany?: pacientesCreateManyTutores_legalesInputEnvelope
    set?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
    disconnect?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
    delete?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
    connect?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
    update?: pacientesUpdateWithWhereUniqueWithoutTutores_legalesInput | pacientesUpdateWithWhereUniqueWithoutTutores_legalesInput[]
    updateMany?: pacientesUpdateManyWithWhereWithoutTutores_legalesInput | pacientesUpdateManyWithWhereWithoutTutores_legalesInput[]
    deleteMany?: pacientesScalarWhereInput | pacientesScalarWhereInput[]
  }

  export type pacientesUncheckedUpdateManyWithoutTutores_legalesNestedInput = {
    create?: XOR<pacientesCreateWithoutTutores_legalesInput, pacientesUncheckedCreateWithoutTutores_legalesInput> | pacientesCreateWithoutTutores_legalesInput[] | pacientesUncheckedCreateWithoutTutores_legalesInput[]
    connectOrCreate?: pacientesCreateOrConnectWithoutTutores_legalesInput | pacientesCreateOrConnectWithoutTutores_legalesInput[]
    upsert?: pacientesUpsertWithWhereUniqueWithoutTutores_legalesInput | pacientesUpsertWithWhereUniqueWithoutTutores_legalesInput[]
    createMany?: pacientesCreateManyTutores_legalesInputEnvelope
    set?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
    disconnect?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
    delete?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
    connect?: pacientesWhereUniqueInput | pacientesWhereUniqueInput[]
    update?: pacientesUpdateWithWhereUniqueWithoutTutores_legalesInput | pacientesUpdateWithWhereUniqueWithoutTutores_legalesInput[]
    updateMany?: pacientesUpdateManyWithWhereWithoutTutores_legalesInput | pacientesUpdateManyWithWhereWithoutTutores_legalesInput[]
    deleteMany?: pacientesScalarWhereInput | pacientesScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type pacientesCreateWithoutAlergiasInput = {
    dni: string
    nombre: string
    apellido: string
    fecha_nacimiento: Date | string
    numero_telefono: string
    email: string
    obra_social?: string | null
    consultas?: consultasCreateNestedManyWithoutPacientesInput
    contactos_emergencia?: contactos_emergenciaCreateNestedManyWithoutPacientesInput
    enfermedades?: enfermedadesCreateNestedManyWithoutPacientesInput
    historial_cirugias?: historial_cirugiasCreateNestedManyWithoutPacientesInput
    medicamentos_actuales?: medicamentos_actualesCreateNestedManyWithoutPacientesInput
    tipos_sangre?: tipos_sangreCreateNestedOneWithoutPacientesInput
    tutores_legales?: tutores_legalesCreateNestedOneWithoutPacientesInput
  }

  export type pacientesUncheckedCreateWithoutAlergiasInput = {
    id?: number
    dni: string
    nombre: string
    apellido: string
    tipo_sangre_id?: number | null
    fecha_nacimiento: Date | string
    numero_telefono: string
    email: string
    obra_social?: string | null
    tutor_legal_id?: number | null
    consultas?: consultasUncheckedCreateNestedManyWithoutPacientesInput
    contactos_emergencia?: contactos_emergenciaUncheckedCreateNestedManyWithoutPacientesInput
    enfermedades?: enfermedadesUncheckedCreateNestedManyWithoutPacientesInput
    historial_cirugias?: historial_cirugiasUncheckedCreateNestedManyWithoutPacientesInput
    medicamentos_actuales?: medicamentos_actualesUncheckedCreateNestedManyWithoutPacientesInput
  }

  export type pacientesCreateOrConnectWithoutAlergiasInput = {
    where: pacientesWhereUniqueInput
    create: XOR<pacientesCreateWithoutAlergiasInput, pacientesUncheckedCreateWithoutAlergiasInput>
  }

  export type pacientesUpsertWithoutAlergiasInput = {
    update: XOR<pacientesUpdateWithoutAlergiasInput, pacientesUncheckedUpdateWithoutAlergiasInput>
    create: XOR<pacientesCreateWithoutAlergiasInput, pacientesUncheckedCreateWithoutAlergiasInput>
    where?: pacientesWhereInput
  }

  export type pacientesUpdateToOneWithWhereWithoutAlergiasInput = {
    where?: pacientesWhereInput
    data: XOR<pacientesUpdateWithoutAlergiasInput, pacientesUncheckedUpdateWithoutAlergiasInput>
  }

  export type pacientesUpdateWithoutAlergiasInput = {
    dni?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    obra_social?: NullableStringFieldUpdateOperationsInput | string | null
    consultas?: consultasUpdateManyWithoutPacientesNestedInput
    contactos_emergencia?: contactos_emergenciaUpdateManyWithoutPacientesNestedInput
    enfermedades?: enfermedadesUpdateManyWithoutPacientesNestedInput
    historial_cirugias?: historial_cirugiasUpdateManyWithoutPacientesNestedInput
    medicamentos_actuales?: medicamentos_actualesUpdateManyWithoutPacientesNestedInput
    tipos_sangre?: tipos_sangreUpdateOneWithoutPacientesNestedInput
    tutores_legales?: tutores_legalesUpdateOneWithoutPacientesNestedInput
  }

  export type pacientesUncheckedUpdateWithoutAlergiasInput = {
    id?: IntFieldUpdateOperationsInput | number
    dni?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    tipo_sangre_id?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    obra_social?: NullableStringFieldUpdateOperationsInput | string | null
    tutor_legal_id?: NullableIntFieldUpdateOperationsInput | number | null
    consultas?: consultasUncheckedUpdateManyWithoutPacientesNestedInput
    contactos_emergencia?: contactos_emergenciaUncheckedUpdateManyWithoutPacientesNestedInput
    enfermedades?: enfermedadesUncheckedUpdateManyWithoutPacientesNestedInput
    historial_cirugias?: historial_cirugiasUncheckedUpdateManyWithoutPacientesNestedInput
    medicamentos_actuales?: medicamentos_actualesUncheckedUpdateManyWithoutPacientesNestedInput
  }

  export type pacientesCreateWithoutConsultasInput = {
    dni: string
    nombre: string
    apellido: string
    fecha_nacimiento: Date | string
    numero_telefono: string
    email: string
    obra_social?: string | null
    alergias?: alergiasCreateNestedManyWithoutPacientesInput
    contactos_emergencia?: contactos_emergenciaCreateNestedManyWithoutPacientesInput
    enfermedades?: enfermedadesCreateNestedManyWithoutPacientesInput
    historial_cirugias?: historial_cirugiasCreateNestedManyWithoutPacientesInput
    medicamentos_actuales?: medicamentos_actualesCreateNestedManyWithoutPacientesInput
    tipos_sangre?: tipos_sangreCreateNestedOneWithoutPacientesInput
    tutores_legales?: tutores_legalesCreateNestedOneWithoutPacientesInput
  }

  export type pacientesUncheckedCreateWithoutConsultasInput = {
    id?: number
    dni: string
    nombre: string
    apellido: string
    tipo_sangre_id?: number | null
    fecha_nacimiento: Date | string
    numero_telefono: string
    email: string
    obra_social?: string | null
    tutor_legal_id?: number | null
    alergias?: alergiasUncheckedCreateNestedManyWithoutPacientesInput
    contactos_emergencia?: contactos_emergenciaUncheckedCreateNestedManyWithoutPacientesInput
    enfermedades?: enfermedadesUncheckedCreateNestedManyWithoutPacientesInput
    historial_cirugias?: historial_cirugiasUncheckedCreateNestedManyWithoutPacientesInput
    medicamentos_actuales?: medicamentos_actualesUncheckedCreateNestedManyWithoutPacientesInput
  }

  export type pacientesCreateOrConnectWithoutConsultasInput = {
    where: pacientesWhereUniqueInput
    create: XOR<pacientesCreateWithoutConsultasInput, pacientesUncheckedCreateWithoutConsultasInput>
  }

  export type pacientesUpsertWithoutConsultasInput = {
    update: XOR<pacientesUpdateWithoutConsultasInput, pacientesUncheckedUpdateWithoutConsultasInput>
    create: XOR<pacientesCreateWithoutConsultasInput, pacientesUncheckedCreateWithoutConsultasInput>
    where?: pacientesWhereInput
  }

  export type pacientesUpdateToOneWithWhereWithoutConsultasInput = {
    where?: pacientesWhereInput
    data: XOR<pacientesUpdateWithoutConsultasInput, pacientesUncheckedUpdateWithoutConsultasInput>
  }

  export type pacientesUpdateWithoutConsultasInput = {
    dni?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    obra_social?: NullableStringFieldUpdateOperationsInput | string | null
    alergias?: alergiasUpdateManyWithoutPacientesNestedInput
    contactos_emergencia?: contactos_emergenciaUpdateManyWithoutPacientesNestedInput
    enfermedades?: enfermedadesUpdateManyWithoutPacientesNestedInput
    historial_cirugias?: historial_cirugiasUpdateManyWithoutPacientesNestedInput
    medicamentos_actuales?: medicamentos_actualesUpdateManyWithoutPacientesNestedInput
    tipos_sangre?: tipos_sangreUpdateOneWithoutPacientesNestedInput
    tutores_legales?: tutores_legalesUpdateOneWithoutPacientesNestedInput
  }

  export type pacientesUncheckedUpdateWithoutConsultasInput = {
    id?: IntFieldUpdateOperationsInput | number
    dni?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    tipo_sangre_id?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    obra_social?: NullableStringFieldUpdateOperationsInput | string | null
    tutor_legal_id?: NullableIntFieldUpdateOperationsInput | number | null
    alergias?: alergiasUncheckedUpdateManyWithoutPacientesNestedInput
    contactos_emergencia?: contactos_emergenciaUncheckedUpdateManyWithoutPacientesNestedInput
    enfermedades?: enfermedadesUncheckedUpdateManyWithoutPacientesNestedInput
    historial_cirugias?: historial_cirugiasUncheckedUpdateManyWithoutPacientesNestedInput
    medicamentos_actuales?: medicamentos_actualesUncheckedUpdateManyWithoutPacientesNestedInput
  }

  export type pacientesCreateWithoutContactos_emergenciaInput = {
    dni: string
    nombre: string
    apellido: string
    fecha_nacimiento: Date | string
    numero_telefono: string
    email: string
    obra_social?: string | null
    alergias?: alergiasCreateNestedManyWithoutPacientesInput
    consultas?: consultasCreateNestedManyWithoutPacientesInput
    enfermedades?: enfermedadesCreateNestedManyWithoutPacientesInput
    historial_cirugias?: historial_cirugiasCreateNestedManyWithoutPacientesInput
    medicamentos_actuales?: medicamentos_actualesCreateNestedManyWithoutPacientesInput
    tipos_sangre?: tipos_sangreCreateNestedOneWithoutPacientesInput
    tutores_legales?: tutores_legalesCreateNestedOneWithoutPacientesInput
  }

  export type pacientesUncheckedCreateWithoutContactos_emergenciaInput = {
    id?: number
    dni: string
    nombre: string
    apellido: string
    tipo_sangre_id?: number | null
    fecha_nacimiento: Date | string
    numero_telefono: string
    email: string
    obra_social?: string | null
    tutor_legal_id?: number | null
    alergias?: alergiasUncheckedCreateNestedManyWithoutPacientesInput
    consultas?: consultasUncheckedCreateNestedManyWithoutPacientesInput
    enfermedades?: enfermedadesUncheckedCreateNestedManyWithoutPacientesInput
    historial_cirugias?: historial_cirugiasUncheckedCreateNestedManyWithoutPacientesInput
    medicamentos_actuales?: medicamentos_actualesUncheckedCreateNestedManyWithoutPacientesInput
  }

  export type pacientesCreateOrConnectWithoutContactos_emergenciaInput = {
    where: pacientesWhereUniqueInput
    create: XOR<pacientesCreateWithoutContactos_emergenciaInput, pacientesUncheckedCreateWithoutContactos_emergenciaInput>
  }

  export type pacientesUpsertWithoutContactos_emergenciaInput = {
    update: XOR<pacientesUpdateWithoutContactos_emergenciaInput, pacientesUncheckedUpdateWithoutContactos_emergenciaInput>
    create: XOR<pacientesCreateWithoutContactos_emergenciaInput, pacientesUncheckedCreateWithoutContactos_emergenciaInput>
    where?: pacientesWhereInput
  }

  export type pacientesUpdateToOneWithWhereWithoutContactos_emergenciaInput = {
    where?: pacientesWhereInput
    data: XOR<pacientesUpdateWithoutContactos_emergenciaInput, pacientesUncheckedUpdateWithoutContactos_emergenciaInput>
  }

  export type pacientesUpdateWithoutContactos_emergenciaInput = {
    dni?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    obra_social?: NullableStringFieldUpdateOperationsInput | string | null
    alergias?: alergiasUpdateManyWithoutPacientesNestedInput
    consultas?: consultasUpdateManyWithoutPacientesNestedInput
    enfermedades?: enfermedadesUpdateManyWithoutPacientesNestedInput
    historial_cirugias?: historial_cirugiasUpdateManyWithoutPacientesNestedInput
    medicamentos_actuales?: medicamentos_actualesUpdateManyWithoutPacientesNestedInput
    tipos_sangre?: tipos_sangreUpdateOneWithoutPacientesNestedInput
    tutores_legales?: tutores_legalesUpdateOneWithoutPacientesNestedInput
  }

  export type pacientesUncheckedUpdateWithoutContactos_emergenciaInput = {
    id?: IntFieldUpdateOperationsInput | number
    dni?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    tipo_sangre_id?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    obra_social?: NullableStringFieldUpdateOperationsInput | string | null
    tutor_legal_id?: NullableIntFieldUpdateOperationsInput | number | null
    alergias?: alergiasUncheckedUpdateManyWithoutPacientesNestedInput
    consultas?: consultasUncheckedUpdateManyWithoutPacientesNestedInput
    enfermedades?: enfermedadesUncheckedUpdateManyWithoutPacientesNestedInput
    historial_cirugias?: historial_cirugiasUncheckedUpdateManyWithoutPacientesNestedInput
    medicamentos_actuales?: medicamentos_actualesUncheckedUpdateManyWithoutPacientesNestedInput
  }

  export type pacientesCreateWithoutEnfermedadesInput = {
    dni: string
    nombre: string
    apellido: string
    fecha_nacimiento: Date | string
    numero_telefono: string
    email: string
    obra_social?: string | null
    alergias?: alergiasCreateNestedManyWithoutPacientesInput
    consultas?: consultasCreateNestedManyWithoutPacientesInput
    contactos_emergencia?: contactos_emergenciaCreateNestedManyWithoutPacientesInput
    historial_cirugias?: historial_cirugiasCreateNestedManyWithoutPacientesInput
    medicamentos_actuales?: medicamentos_actualesCreateNestedManyWithoutPacientesInput
    tipos_sangre?: tipos_sangreCreateNestedOneWithoutPacientesInput
    tutores_legales?: tutores_legalesCreateNestedOneWithoutPacientesInput
  }

  export type pacientesUncheckedCreateWithoutEnfermedadesInput = {
    id?: number
    dni: string
    nombre: string
    apellido: string
    tipo_sangre_id?: number | null
    fecha_nacimiento: Date | string
    numero_telefono: string
    email: string
    obra_social?: string | null
    tutor_legal_id?: number | null
    alergias?: alergiasUncheckedCreateNestedManyWithoutPacientesInput
    consultas?: consultasUncheckedCreateNestedManyWithoutPacientesInput
    contactos_emergencia?: contactos_emergenciaUncheckedCreateNestedManyWithoutPacientesInput
    historial_cirugias?: historial_cirugiasUncheckedCreateNestedManyWithoutPacientesInput
    medicamentos_actuales?: medicamentos_actualesUncheckedCreateNestedManyWithoutPacientesInput
  }

  export type pacientesCreateOrConnectWithoutEnfermedadesInput = {
    where: pacientesWhereUniqueInput
    create: XOR<pacientesCreateWithoutEnfermedadesInput, pacientesUncheckedCreateWithoutEnfermedadesInput>
  }

  export type pacientesUpsertWithoutEnfermedadesInput = {
    update: XOR<pacientesUpdateWithoutEnfermedadesInput, pacientesUncheckedUpdateWithoutEnfermedadesInput>
    create: XOR<pacientesCreateWithoutEnfermedadesInput, pacientesUncheckedCreateWithoutEnfermedadesInput>
    where?: pacientesWhereInput
  }

  export type pacientesUpdateToOneWithWhereWithoutEnfermedadesInput = {
    where?: pacientesWhereInput
    data: XOR<pacientesUpdateWithoutEnfermedadesInput, pacientesUncheckedUpdateWithoutEnfermedadesInput>
  }

  export type pacientesUpdateWithoutEnfermedadesInput = {
    dni?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    obra_social?: NullableStringFieldUpdateOperationsInput | string | null
    alergias?: alergiasUpdateManyWithoutPacientesNestedInput
    consultas?: consultasUpdateManyWithoutPacientesNestedInput
    contactos_emergencia?: contactos_emergenciaUpdateManyWithoutPacientesNestedInput
    historial_cirugias?: historial_cirugiasUpdateManyWithoutPacientesNestedInput
    medicamentos_actuales?: medicamentos_actualesUpdateManyWithoutPacientesNestedInput
    tipos_sangre?: tipos_sangreUpdateOneWithoutPacientesNestedInput
    tutores_legales?: tutores_legalesUpdateOneWithoutPacientesNestedInput
  }

  export type pacientesUncheckedUpdateWithoutEnfermedadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    dni?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    tipo_sangre_id?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    obra_social?: NullableStringFieldUpdateOperationsInput | string | null
    tutor_legal_id?: NullableIntFieldUpdateOperationsInput | number | null
    alergias?: alergiasUncheckedUpdateManyWithoutPacientesNestedInput
    consultas?: consultasUncheckedUpdateManyWithoutPacientesNestedInput
    contactos_emergencia?: contactos_emergenciaUncheckedUpdateManyWithoutPacientesNestedInput
    historial_cirugias?: historial_cirugiasUncheckedUpdateManyWithoutPacientesNestedInput
    medicamentos_actuales?: medicamentos_actualesUncheckedUpdateManyWithoutPacientesNestedInput
  }

  export type pacientesCreateWithoutHistorial_cirugiasInput = {
    dni: string
    nombre: string
    apellido: string
    fecha_nacimiento: Date | string
    numero_telefono: string
    email: string
    obra_social?: string | null
    alergias?: alergiasCreateNestedManyWithoutPacientesInput
    consultas?: consultasCreateNestedManyWithoutPacientesInput
    contactos_emergencia?: contactos_emergenciaCreateNestedManyWithoutPacientesInput
    enfermedades?: enfermedadesCreateNestedManyWithoutPacientesInput
    medicamentos_actuales?: medicamentos_actualesCreateNestedManyWithoutPacientesInput
    tipos_sangre?: tipos_sangreCreateNestedOneWithoutPacientesInput
    tutores_legales?: tutores_legalesCreateNestedOneWithoutPacientesInput
  }

  export type pacientesUncheckedCreateWithoutHistorial_cirugiasInput = {
    id?: number
    dni: string
    nombre: string
    apellido: string
    tipo_sangre_id?: number | null
    fecha_nacimiento: Date | string
    numero_telefono: string
    email: string
    obra_social?: string | null
    tutor_legal_id?: number | null
    alergias?: alergiasUncheckedCreateNestedManyWithoutPacientesInput
    consultas?: consultasUncheckedCreateNestedManyWithoutPacientesInput
    contactos_emergencia?: contactos_emergenciaUncheckedCreateNestedManyWithoutPacientesInput
    enfermedades?: enfermedadesUncheckedCreateNestedManyWithoutPacientesInput
    medicamentos_actuales?: medicamentos_actualesUncheckedCreateNestedManyWithoutPacientesInput
  }

  export type pacientesCreateOrConnectWithoutHistorial_cirugiasInput = {
    where: pacientesWhereUniqueInput
    create: XOR<pacientesCreateWithoutHistorial_cirugiasInput, pacientesUncheckedCreateWithoutHistorial_cirugiasInput>
  }

  export type pacientesUpsertWithoutHistorial_cirugiasInput = {
    update: XOR<pacientesUpdateWithoutHistorial_cirugiasInput, pacientesUncheckedUpdateWithoutHistorial_cirugiasInput>
    create: XOR<pacientesCreateWithoutHistorial_cirugiasInput, pacientesUncheckedCreateWithoutHistorial_cirugiasInput>
    where?: pacientesWhereInput
  }

  export type pacientesUpdateToOneWithWhereWithoutHistorial_cirugiasInput = {
    where?: pacientesWhereInput
    data: XOR<pacientesUpdateWithoutHistorial_cirugiasInput, pacientesUncheckedUpdateWithoutHistorial_cirugiasInput>
  }

  export type pacientesUpdateWithoutHistorial_cirugiasInput = {
    dni?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    obra_social?: NullableStringFieldUpdateOperationsInput | string | null
    alergias?: alergiasUpdateManyWithoutPacientesNestedInput
    consultas?: consultasUpdateManyWithoutPacientesNestedInput
    contactos_emergencia?: contactos_emergenciaUpdateManyWithoutPacientesNestedInput
    enfermedades?: enfermedadesUpdateManyWithoutPacientesNestedInput
    medicamentos_actuales?: medicamentos_actualesUpdateManyWithoutPacientesNestedInput
    tipos_sangre?: tipos_sangreUpdateOneWithoutPacientesNestedInput
    tutores_legales?: tutores_legalesUpdateOneWithoutPacientesNestedInput
  }

  export type pacientesUncheckedUpdateWithoutHistorial_cirugiasInput = {
    id?: IntFieldUpdateOperationsInput | number
    dni?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    tipo_sangre_id?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    obra_social?: NullableStringFieldUpdateOperationsInput | string | null
    tutor_legal_id?: NullableIntFieldUpdateOperationsInput | number | null
    alergias?: alergiasUncheckedUpdateManyWithoutPacientesNestedInput
    consultas?: consultasUncheckedUpdateManyWithoutPacientesNestedInput
    contactos_emergencia?: contactos_emergenciaUncheckedUpdateManyWithoutPacientesNestedInput
    enfermedades?: enfermedadesUncheckedUpdateManyWithoutPacientesNestedInput
    medicamentos_actuales?: medicamentos_actualesUncheckedUpdateManyWithoutPacientesNestedInput
  }

  export type pacientesCreateWithoutMedicamentos_actualesInput = {
    dni: string
    nombre: string
    apellido: string
    fecha_nacimiento: Date | string
    numero_telefono: string
    email: string
    obra_social?: string | null
    alergias?: alergiasCreateNestedManyWithoutPacientesInput
    consultas?: consultasCreateNestedManyWithoutPacientesInput
    contactos_emergencia?: contactos_emergenciaCreateNestedManyWithoutPacientesInput
    enfermedades?: enfermedadesCreateNestedManyWithoutPacientesInput
    historial_cirugias?: historial_cirugiasCreateNestedManyWithoutPacientesInput
    tipos_sangre?: tipos_sangreCreateNestedOneWithoutPacientesInput
    tutores_legales?: tutores_legalesCreateNestedOneWithoutPacientesInput
  }

  export type pacientesUncheckedCreateWithoutMedicamentos_actualesInput = {
    id?: number
    dni: string
    nombre: string
    apellido: string
    tipo_sangre_id?: number | null
    fecha_nacimiento: Date | string
    numero_telefono: string
    email: string
    obra_social?: string | null
    tutor_legal_id?: number | null
    alergias?: alergiasUncheckedCreateNestedManyWithoutPacientesInput
    consultas?: consultasUncheckedCreateNestedManyWithoutPacientesInput
    contactos_emergencia?: contactos_emergenciaUncheckedCreateNestedManyWithoutPacientesInput
    enfermedades?: enfermedadesUncheckedCreateNestedManyWithoutPacientesInput
    historial_cirugias?: historial_cirugiasUncheckedCreateNestedManyWithoutPacientesInput
  }

  export type pacientesCreateOrConnectWithoutMedicamentos_actualesInput = {
    where: pacientesWhereUniqueInput
    create: XOR<pacientesCreateWithoutMedicamentos_actualesInput, pacientesUncheckedCreateWithoutMedicamentos_actualesInput>
  }

  export type pacientesUpsertWithoutMedicamentos_actualesInput = {
    update: XOR<pacientesUpdateWithoutMedicamentos_actualesInput, pacientesUncheckedUpdateWithoutMedicamentos_actualesInput>
    create: XOR<pacientesCreateWithoutMedicamentos_actualesInput, pacientesUncheckedCreateWithoutMedicamentos_actualesInput>
    where?: pacientesWhereInput
  }

  export type pacientesUpdateToOneWithWhereWithoutMedicamentos_actualesInput = {
    where?: pacientesWhereInput
    data: XOR<pacientesUpdateWithoutMedicamentos_actualesInput, pacientesUncheckedUpdateWithoutMedicamentos_actualesInput>
  }

  export type pacientesUpdateWithoutMedicamentos_actualesInput = {
    dni?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    obra_social?: NullableStringFieldUpdateOperationsInput | string | null
    alergias?: alergiasUpdateManyWithoutPacientesNestedInput
    consultas?: consultasUpdateManyWithoutPacientesNestedInput
    contactos_emergencia?: contactos_emergenciaUpdateManyWithoutPacientesNestedInput
    enfermedades?: enfermedadesUpdateManyWithoutPacientesNestedInput
    historial_cirugias?: historial_cirugiasUpdateManyWithoutPacientesNestedInput
    tipos_sangre?: tipos_sangreUpdateOneWithoutPacientesNestedInput
    tutores_legales?: tutores_legalesUpdateOneWithoutPacientesNestedInput
  }

  export type pacientesUncheckedUpdateWithoutMedicamentos_actualesInput = {
    id?: IntFieldUpdateOperationsInput | number
    dni?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    tipo_sangre_id?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    obra_social?: NullableStringFieldUpdateOperationsInput | string | null
    tutor_legal_id?: NullableIntFieldUpdateOperationsInput | number | null
    alergias?: alergiasUncheckedUpdateManyWithoutPacientesNestedInput
    consultas?: consultasUncheckedUpdateManyWithoutPacientesNestedInput
    contactos_emergencia?: contactos_emergenciaUncheckedUpdateManyWithoutPacientesNestedInput
    enfermedades?: enfermedadesUncheckedUpdateManyWithoutPacientesNestedInput
    historial_cirugias?: historial_cirugiasUncheckedUpdateManyWithoutPacientesNestedInput
  }

  export type alergiasCreateWithoutPacientesInput = {
    alergia: string
  }

  export type alergiasUncheckedCreateWithoutPacientesInput = {
    id?: number
    alergia: string
  }

  export type alergiasCreateOrConnectWithoutPacientesInput = {
    where: alergiasWhereUniqueInput
    create: XOR<alergiasCreateWithoutPacientesInput, alergiasUncheckedCreateWithoutPacientesInput>
  }

  export type alergiasCreateManyPacientesInputEnvelope = {
    data: alergiasCreateManyPacientesInput | alergiasCreateManyPacientesInput[]
    skipDuplicates?: boolean
  }

  export type consultasCreateWithoutPacientesInput = {
    fecha_consulta: Date | string
    hora_consulta: Date | string
    motivo: string
    diagnostico?: string | null
    tratamiento?: string | null
    imagenes?: consultasCreateimagenesInput | string[]
    notas?: string | null
  }

  export type consultasUncheckedCreateWithoutPacientesInput = {
    id?: number
    fecha_consulta: Date | string
    hora_consulta: Date | string
    motivo: string
    diagnostico?: string | null
    tratamiento?: string | null
    imagenes?: consultasCreateimagenesInput | string[]
    notas?: string | null
  }

  export type consultasCreateOrConnectWithoutPacientesInput = {
    where: consultasWhereUniqueInput
    create: XOR<consultasCreateWithoutPacientesInput, consultasUncheckedCreateWithoutPacientesInput>
  }

  export type consultasCreateManyPacientesInputEnvelope = {
    data: consultasCreateManyPacientesInput | consultasCreateManyPacientesInput[]
    skipDuplicates?: boolean
  }

  export type contactos_emergenciaCreateWithoutPacientesInput = {
    nombre: string
    relacion?: string | null
    telefono: string
  }

  export type contactos_emergenciaUncheckedCreateWithoutPacientesInput = {
    id?: number
    nombre: string
    relacion?: string | null
    telefono: string
  }

  export type contactos_emergenciaCreateOrConnectWithoutPacientesInput = {
    where: contactos_emergenciaWhereUniqueInput
    create: XOR<contactos_emergenciaCreateWithoutPacientesInput, contactos_emergenciaUncheckedCreateWithoutPacientesInput>
  }

  export type contactos_emergenciaCreateManyPacientesInputEnvelope = {
    data: contactos_emergenciaCreateManyPacientesInput | contactos_emergenciaCreateManyPacientesInput[]
    skipDuplicates?: boolean
  }

  export type enfermedadesCreateWithoutPacientesInput = {
    enfermedad: string
  }

  export type enfermedadesUncheckedCreateWithoutPacientesInput = {
    id?: number
    enfermedad: string
  }

  export type enfermedadesCreateOrConnectWithoutPacientesInput = {
    where: enfermedadesWhereUniqueInput
    create: XOR<enfermedadesCreateWithoutPacientesInput, enfermedadesUncheckedCreateWithoutPacientesInput>
  }

  export type enfermedadesCreateManyPacientesInputEnvelope = {
    data: enfermedadesCreateManyPacientesInput | enfermedadesCreateManyPacientesInput[]
    skipDuplicates?: boolean
  }

  export type historial_cirugiasCreateWithoutPacientesInput = {
    cirugia: string
    fecha?: Date | string | null
    observaciones?: string | null
  }

  export type historial_cirugiasUncheckedCreateWithoutPacientesInput = {
    id?: number
    cirugia: string
    fecha?: Date | string | null
    observaciones?: string | null
  }

  export type historial_cirugiasCreateOrConnectWithoutPacientesInput = {
    where: historial_cirugiasWhereUniqueInput
    create: XOR<historial_cirugiasCreateWithoutPacientesInput, historial_cirugiasUncheckedCreateWithoutPacientesInput>
  }

  export type historial_cirugiasCreateManyPacientesInputEnvelope = {
    data: historial_cirugiasCreateManyPacientesInput | historial_cirugiasCreateManyPacientesInput[]
    skipDuplicates?: boolean
  }

  export type medicamentos_actualesCreateWithoutPacientesInput = {
    medicamento: string
    dosis: string
    frecuencia: string
    via_administracion: string
  }

  export type medicamentos_actualesUncheckedCreateWithoutPacientesInput = {
    id?: number
    medicamento: string
    dosis: string
    frecuencia: string
    via_administracion: string
  }

  export type medicamentos_actualesCreateOrConnectWithoutPacientesInput = {
    where: medicamentos_actualesWhereUniqueInput
    create: XOR<medicamentos_actualesCreateWithoutPacientesInput, medicamentos_actualesUncheckedCreateWithoutPacientesInput>
  }

  export type medicamentos_actualesCreateManyPacientesInputEnvelope = {
    data: medicamentos_actualesCreateManyPacientesInput | medicamentos_actualesCreateManyPacientesInput[]
    skipDuplicates?: boolean
  }

  export type tipos_sangreCreateWithoutPacientesInput = {
    tipo: string
  }

  export type tipos_sangreUncheckedCreateWithoutPacientesInput = {
    id?: number
    tipo: string
  }

  export type tipos_sangreCreateOrConnectWithoutPacientesInput = {
    where: tipos_sangreWhereUniqueInput
    create: XOR<tipos_sangreCreateWithoutPacientesInput, tipos_sangreUncheckedCreateWithoutPacientesInput>
  }

  export type tutores_legalesCreateWithoutPacientesInput = {
    dni: string
    nombre: string
    apellido: string
    telefono?: string | null
    direccion?: string | null
  }

  export type tutores_legalesUncheckedCreateWithoutPacientesInput = {
    id?: number
    dni: string
    nombre: string
    apellido: string
    telefono?: string | null
    direccion?: string | null
  }

  export type tutores_legalesCreateOrConnectWithoutPacientesInput = {
    where: tutores_legalesWhereUniqueInput
    create: XOR<tutores_legalesCreateWithoutPacientesInput, tutores_legalesUncheckedCreateWithoutPacientesInput>
  }

  export type alergiasUpsertWithWhereUniqueWithoutPacientesInput = {
    where: alergiasWhereUniqueInput
    update: XOR<alergiasUpdateWithoutPacientesInput, alergiasUncheckedUpdateWithoutPacientesInput>
    create: XOR<alergiasCreateWithoutPacientesInput, alergiasUncheckedCreateWithoutPacientesInput>
  }

  export type alergiasUpdateWithWhereUniqueWithoutPacientesInput = {
    where: alergiasWhereUniqueInput
    data: XOR<alergiasUpdateWithoutPacientesInput, alergiasUncheckedUpdateWithoutPacientesInput>
  }

  export type alergiasUpdateManyWithWhereWithoutPacientesInput = {
    where: alergiasScalarWhereInput
    data: XOR<alergiasUpdateManyMutationInput, alergiasUncheckedUpdateManyWithoutPacientesInput>
  }

  export type alergiasScalarWhereInput = {
    AND?: alergiasScalarWhereInput | alergiasScalarWhereInput[]
    OR?: alergiasScalarWhereInput[]
    NOT?: alergiasScalarWhereInput | alergiasScalarWhereInput[]
    id?: IntFilter<"alergias"> | number
    paciente_id?: IntNullableFilter<"alergias"> | number | null
    alergia?: StringFilter<"alergias"> | string
  }

  export type consultasUpsertWithWhereUniqueWithoutPacientesInput = {
    where: consultasWhereUniqueInput
    update: XOR<consultasUpdateWithoutPacientesInput, consultasUncheckedUpdateWithoutPacientesInput>
    create: XOR<consultasCreateWithoutPacientesInput, consultasUncheckedCreateWithoutPacientesInput>
  }

  export type consultasUpdateWithWhereUniqueWithoutPacientesInput = {
    where: consultasWhereUniqueInput
    data: XOR<consultasUpdateWithoutPacientesInput, consultasUncheckedUpdateWithoutPacientesInput>
  }

  export type consultasUpdateManyWithWhereWithoutPacientesInput = {
    where: consultasScalarWhereInput
    data: XOR<consultasUpdateManyMutationInput, consultasUncheckedUpdateManyWithoutPacientesInput>
  }

  export type consultasScalarWhereInput = {
    AND?: consultasScalarWhereInput | consultasScalarWhereInput[]
    OR?: consultasScalarWhereInput[]
    NOT?: consultasScalarWhereInput | consultasScalarWhereInput[]
    id?: IntFilter<"consultas"> | number
    paciente_id?: IntNullableFilter<"consultas"> | number | null
    fecha_consulta?: DateTimeFilter<"consultas"> | Date | string
    hora_consulta?: DateTimeFilter<"consultas"> | Date | string
    motivo?: StringFilter<"consultas"> | string
    diagnostico?: StringNullableFilter<"consultas"> | string | null
    tratamiento?: StringNullableFilter<"consultas"> | string | null
    imagenes?: StringNullableListFilter<"consultas">
    notas?: StringNullableFilter<"consultas"> | string | null
  }

  export type contactos_emergenciaUpsertWithWhereUniqueWithoutPacientesInput = {
    where: contactos_emergenciaWhereUniqueInput
    update: XOR<contactos_emergenciaUpdateWithoutPacientesInput, contactos_emergenciaUncheckedUpdateWithoutPacientesInput>
    create: XOR<contactos_emergenciaCreateWithoutPacientesInput, contactos_emergenciaUncheckedCreateWithoutPacientesInput>
  }

  export type contactos_emergenciaUpdateWithWhereUniqueWithoutPacientesInput = {
    where: contactos_emergenciaWhereUniqueInput
    data: XOR<contactos_emergenciaUpdateWithoutPacientesInput, contactos_emergenciaUncheckedUpdateWithoutPacientesInput>
  }

  export type contactos_emergenciaUpdateManyWithWhereWithoutPacientesInput = {
    where: contactos_emergenciaScalarWhereInput
    data: XOR<contactos_emergenciaUpdateManyMutationInput, contactos_emergenciaUncheckedUpdateManyWithoutPacientesInput>
  }

  export type contactos_emergenciaScalarWhereInput = {
    AND?: contactos_emergenciaScalarWhereInput | contactos_emergenciaScalarWhereInput[]
    OR?: contactos_emergenciaScalarWhereInput[]
    NOT?: contactos_emergenciaScalarWhereInput | contactos_emergenciaScalarWhereInput[]
    id?: IntFilter<"contactos_emergencia"> | number
    paciente_id?: IntNullableFilter<"contactos_emergencia"> | number | null
    nombre?: StringFilter<"contactos_emergencia"> | string
    relacion?: StringNullableFilter<"contactos_emergencia"> | string | null
    telefono?: StringFilter<"contactos_emergencia"> | string
  }

  export type enfermedadesUpsertWithWhereUniqueWithoutPacientesInput = {
    where: enfermedadesWhereUniqueInput
    update: XOR<enfermedadesUpdateWithoutPacientesInput, enfermedadesUncheckedUpdateWithoutPacientesInput>
    create: XOR<enfermedadesCreateWithoutPacientesInput, enfermedadesUncheckedCreateWithoutPacientesInput>
  }

  export type enfermedadesUpdateWithWhereUniqueWithoutPacientesInput = {
    where: enfermedadesWhereUniqueInput
    data: XOR<enfermedadesUpdateWithoutPacientesInput, enfermedadesUncheckedUpdateWithoutPacientesInput>
  }

  export type enfermedadesUpdateManyWithWhereWithoutPacientesInput = {
    where: enfermedadesScalarWhereInput
    data: XOR<enfermedadesUpdateManyMutationInput, enfermedadesUncheckedUpdateManyWithoutPacientesInput>
  }

  export type enfermedadesScalarWhereInput = {
    AND?: enfermedadesScalarWhereInput | enfermedadesScalarWhereInput[]
    OR?: enfermedadesScalarWhereInput[]
    NOT?: enfermedadesScalarWhereInput | enfermedadesScalarWhereInput[]
    id?: IntFilter<"enfermedades"> | number
    paciente_id?: IntNullableFilter<"enfermedades"> | number | null
    enfermedad?: StringFilter<"enfermedades"> | string
  }

  export type historial_cirugiasUpsertWithWhereUniqueWithoutPacientesInput = {
    where: historial_cirugiasWhereUniqueInput
    update: XOR<historial_cirugiasUpdateWithoutPacientesInput, historial_cirugiasUncheckedUpdateWithoutPacientesInput>
    create: XOR<historial_cirugiasCreateWithoutPacientesInput, historial_cirugiasUncheckedCreateWithoutPacientesInput>
  }

  export type historial_cirugiasUpdateWithWhereUniqueWithoutPacientesInput = {
    where: historial_cirugiasWhereUniqueInput
    data: XOR<historial_cirugiasUpdateWithoutPacientesInput, historial_cirugiasUncheckedUpdateWithoutPacientesInput>
  }

  export type historial_cirugiasUpdateManyWithWhereWithoutPacientesInput = {
    where: historial_cirugiasScalarWhereInput
    data: XOR<historial_cirugiasUpdateManyMutationInput, historial_cirugiasUncheckedUpdateManyWithoutPacientesInput>
  }

  export type historial_cirugiasScalarWhereInput = {
    AND?: historial_cirugiasScalarWhereInput | historial_cirugiasScalarWhereInput[]
    OR?: historial_cirugiasScalarWhereInput[]
    NOT?: historial_cirugiasScalarWhereInput | historial_cirugiasScalarWhereInput[]
    id?: IntFilter<"historial_cirugias"> | number
    paciente_id?: IntNullableFilter<"historial_cirugias"> | number | null
    cirugia?: StringFilter<"historial_cirugias"> | string
    fecha?: DateTimeNullableFilter<"historial_cirugias"> | Date | string | null
    observaciones?: StringNullableFilter<"historial_cirugias"> | string | null
  }

  export type medicamentos_actualesUpsertWithWhereUniqueWithoutPacientesInput = {
    where: medicamentos_actualesWhereUniqueInput
    update: XOR<medicamentos_actualesUpdateWithoutPacientesInput, medicamentos_actualesUncheckedUpdateWithoutPacientesInput>
    create: XOR<medicamentos_actualesCreateWithoutPacientesInput, medicamentos_actualesUncheckedCreateWithoutPacientesInput>
  }

  export type medicamentos_actualesUpdateWithWhereUniqueWithoutPacientesInput = {
    where: medicamentos_actualesWhereUniqueInput
    data: XOR<medicamentos_actualesUpdateWithoutPacientesInput, medicamentos_actualesUncheckedUpdateWithoutPacientesInput>
  }

  export type medicamentos_actualesUpdateManyWithWhereWithoutPacientesInput = {
    where: medicamentos_actualesScalarWhereInput
    data: XOR<medicamentos_actualesUpdateManyMutationInput, medicamentos_actualesUncheckedUpdateManyWithoutPacientesInput>
  }

  export type medicamentos_actualesScalarWhereInput = {
    AND?: medicamentos_actualesScalarWhereInput | medicamentos_actualesScalarWhereInput[]
    OR?: medicamentos_actualesScalarWhereInput[]
    NOT?: medicamentos_actualesScalarWhereInput | medicamentos_actualesScalarWhereInput[]
    id?: IntFilter<"medicamentos_actuales"> | number
    paciente_id?: IntNullableFilter<"medicamentos_actuales"> | number | null
    medicamento?: StringFilter<"medicamentos_actuales"> | string
    dosis?: StringFilter<"medicamentos_actuales"> | string
    frecuencia?: StringFilter<"medicamentos_actuales"> | string
    via_administracion?: StringFilter<"medicamentos_actuales"> | string
  }

  export type tipos_sangreUpsertWithoutPacientesInput = {
    update: XOR<tipos_sangreUpdateWithoutPacientesInput, tipos_sangreUncheckedUpdateWithoutPacientesInput>
    create: XOR<tipos_sangreCreateWithoutPacientesInput, tipos_sangreUncheckedCreateWithoutPacientesInput>
    where?: tipos_sangreWhereInput
  }

  export type tipos_sangreUpdateToOneWithWhereWithoutPacientesInput = {
    where?: tipos_sangreWhereInput
    data: XOR<tipos_sangreUpdateWithoutPacientesInput, tipos_sangreUncheckedUpdateWithoutPacientesInput>
  }

  export type tipos_sangreUpdateWithoutPacientesInput = {
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type tipos_sangreUncheckedUpdateWithoutPacientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type tutores_legalesUpsertWithoutPacientesInput = {
    update: XOR<tutores_legalesUpdateWithoutPacientesInput, tutores_legalesUncheckedUpdateWithoutPacientesInput>
    create: XOR<tutores_legalesCreateWithoutPacientesInput, tutores_legalesUncheckedCreateWithoutPacientesInput>
    where?: tutores_legalesWhereInput
  }

  export type tutores_legalesUpdateToOneWithWhereWithoutPacientesInput = {
    where?: tutores_legalesWhereInput
    data: XOR<tutores_legalesUpdateWithoutPacientesInput, tutores_legalesUncheckedUpdateWithoutPacientesInput>
  }

  export type tutores_legalesUpdateWithoutPacientesInput = {
    dni?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tutores_legalesUncheckedUpdateWithoutPacientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    dni?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pacientesCreateWithoutTipos_sangreInput = {
    dni: string
    nombre: string
    apellido: string
    fecha_nacimiento: Date | string
    numero_telefono: string
    email: string
    obra_social?: string | null
    alergias?: alergiasCreateNestedManyWithoutPacientesInput
    consultas?: consultasCreateNestedManyWithoutPacientesInput
    contactos_emergencia?: contactos_emergenciaCreateNestedManyWithoutPacientesInput
    enfermedades?: enfermedadesCreateNestedManyWithoutPacientesInput
    historial_cirugias?: historial_cirugiasCreateNestedManyWithoutPacientesInput
    medicamentos_actuales?: medicamentos_actualesCreateNestedManyWithoutPacientesInput
    tutores_legales?: tutores_legalesCreateNestedOneWithoutPacientesInput
  }

  export type pacientesUncheckedCreateWithoutTipos_sangreInput = {
    id?: number
    dni: string
    nombre: string
    apellido: string
    fecha_nacimiento: Date | string
    numero_telefono: string
    email: string
    obra_social?: string | null
    tutor_legal_id?: number | null
    alergias?: alergiasUncheckedCreateNestedManyWithoutPacientesInput
    consultas?: consultasUncheckedCreateNestedManyWithoutPacientesInput
    contactos_emergencia?: contactos_emergenciaUncheckedCreateNestedManyWithoutPacientesInput
    enfermedades?: enfermedadesUncheckedCreateNestedManyWithoutPacientesInput
    historial_cirugias?: historial_cirugiasUncheckedCreateNestedManyWithoutPacientesInput
    medicamentos_actuales?: medicamentos_actualesUncheckedCreateNestedManyWithoutPacientesInput
  }

  export type pacientesCreateOrConnectWithoutTipos_sangreInput = {
    where: pacientesWhereUniqueInput
    create: XOR<pacientesCreateWithoutTipos_sangreInput, pacientesUncheckedCreateWithoutTipos_sangreInput>
  }

  export type pacientesCreateManyTipos_sangreInputEnvelope = {
    data: pacientesCreateManyTipos_sangreInput | pacientesCreateManyTipos_sangreInput[]
    skipDuplicates?: boolean
  }

  export type pacientesUpsertWithWhereUniqueWithoutTipos_sangreInput = {
    where: pacientesWhereUniqueInput
    update: XOR<pacientesUpdateWithoutTipos_sangreInput, pacientesUncheckedUpdateWithoutTipos_sangreInput>
    create: XOR<pacientesCreateWithoutTipos_sangreInput, pacientesUncheckedCreateWithoutTipos_sangreInput>
  }

  export type pacientesUpdateWithWhereUniqueWithoutTipos_sangreInput = {
    where: pacientesWhereUniqueInput
    data: XOR<pacientesUpdateWithoutTipos_sangreInput, pacientesUncheckedUpdateWithoutTipos_sangreInput>
  }

  export type pacientesUpdateManyWithWhereWithoutTipos_sangreInput = {
    where: pacientesScalarWhereInput
    data: XOR<pacientesUpdateManyMutationInput, pacientesUncheckedUpdateManyWithoutTipos_sangreInput>
  }

  export type pacientesScalarWhereInput = {
    AND?: pacientesScalarWhereInput | pacientesScalarWhereInput[]
    OR?: pacientesScalarWhereInput[]
    NOT?: pacientesScalarWhereInput | pacientesScalarWhereInput[]
    id?: IntFilter<"pacientes"> | number
    dni?: StringFilter<"pacientes"> | string
    nombre?: StringFilter<"pacientes"> | string
    apellido?: StringFilter<"pacientes"> | string
    tipo_sangre_id?: IntNullableFilter<"pacientes"> | number | null
    fecha_nacimiento?: DateTimeFilter<"pacientes"> | Date | string
    numero_telefono?: StringFilter<"pacientes"> | string
    email?: StringFilter<"pacientes"> | string
    obra_social?: StringNullableFilter<"pacientes"> | string | null
    tutor_legal_id?: IntNullableFilter<"pacientes"> | number | null
  }

  export type pacientesCreateWithoutTutores_legalesInput = {
    dni: string
    nombre: string
    apellido: string
    fecha_nacimiento: Date | string
    numero_telefono: string
    email: string
    obra_social?: string | null
    alergias?: alergiasCreateNestedManyWithoutPacientesInput
    consultas?: consultasCreateNestedManyWithoutPacientesInput
    contactos_emergencia?: contactos_emergenciaCreateNestedManyWithoutPacientesInput
    enfermedades?: enfermedadesCreateNestedManyWithoutPacientesInput
    historial_cirugias?: historial_cirugiasCreateNestedManyWithoutPacientesInput
    medicamentos_actuales?: medicamentos_actualesCreateNestedManyWithoutPacientesInput
    tipos_sangre?: tipos_sangreCreateNestedOneWithoutPacientesInput
  }

  export type pacientesUncheckedCreateWithoutTutores_legalesInput = {
    id?: number
    dni: string
    nombre: string
    apellido: string
    tipo_sangre_id?: number | null
    fecha_nacimiento: Date | string
    numero_telefono: string
    email: string
    obra_social?: string | null
    alergias?: alergiasUncheckedCreateNestedManyWithoutPacientesInput
    consultas?: consultasUncheckedCreateNestedManyWithoutPacientesInput
    contactos_emergencia?: contactos_emergenciaUncheckedCreateNestedManyWithoutPacientesInput
    enfermedades?: enfermedadesUncheckedCreateNestedManyWithoutPacientesInput
    historial_cirugias?: historial_cirugiasUncheckedCreateNestedManyWithoutPacientesInput
    medicamentos_actuales?: medicamentos_actualesUncheckedCreateNestedManyWithoutPacientesInput
  }

  export type pacientesCreateOrConnectWithoutTutores_legalesInput = {
    where: pacientesWhereUniqueInput
    create: XOR<pacientesCreateWithoutTutores_legalesInput, pacientesUncheckedCreateWithoutTutores_legalesInput>
  }

  export type pacientesCreateManyTutores_legalesInputEnvelope = {
    data: pacientesCreateManyTutores_legalesInput | pacientesCreateManyTutores_legalesInput[]
    skipDuplicates?: boolean
  }

  export type pacientesUpsertWithWhereUniqueWithoutTutores_legalesInput = {
    where: pacientesWhereUniqueInput
    update: XOR<pacientesUpdateWithoutTutores_legalesInput, pacientesUncheckedUpdateWithoutTutores_legalesInput>
    create: XOR<pacientesCreateWithoutTutores_legalesInput, pacientesUncheckedCreateWithoutTutores_legalesInput>
  }

  export type pacientesUpdateWithWhereUniqueWithoutTutores_legalesInput = {
    where: pacientesWhereUniqueInput
    data: XOR<pacientesUpdateWithoutTutores_legalesInput, pacientesUncheckedUpdateWithoutTutores_legalesInput>
  }

  export type pacientesUpdateManyWithWhereWithoutTutores_legalesInput = {
    where: pacientesScalarWhereInput
    data: XOR<pacientesUpdateManyMutationInput, pacientesUncheckedUpdateManyWithoutTutores_legalesInput>
  }

  export type alergiasCreateManyPacientesInput = {
    id?: number
    alergia: string
  }

  export type consultasCreateManyPacientesInput = {
    id?: number
    fecha_consulta: Date | string
    hora_consulta: Date | string
    motivo: string
    diagnostico?: string | null
    tratamiento?: string | null
    imagenes?: consultasCreateimagenesInput | string[]
    notas?: string | null
  }

  export type contactos_emergenciaCreateManyPacientesInput = {
    id?: number
    nombre: string
    relacion?: string | null
    telefono: string
  }

  export type enfermedadesCreateManyPacientesInput = {
    id?: number
    enfermedad: string
  }

  export type historial_cirugiasCreateManyPacientesInput = {
    id?: number
    cirugia: string
    fecha?: Date | string | null
    observaciones?: string | null
  }

  export type medicamentos_actualesCreateManyPacientesInput = {
    id?: number
    medicamento: string
    dosis: string
    frecuencia: string
    via_administracion: string
  }

  export type alergiasUpdateWithoutPacientesInput = {
    alergia?: StringFieldUpdateOperationsInput | string
  }

  export type alergiasUncheckedUpdateWithoutPacientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    alergia?: StringFieldUpdateOperationsInput | string
  }

  export type alergiasUncheckedUpdateManyWithoutPacientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    alergia?: StringFieldUpdateOperationsInput | string
  }

  export type consultasUpdateWithoutPacientesInput = {
    fecha_consulta?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_consulta?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    diagnostico?: NullableStringFieldUpdateOperationsInput | string | null
    tratamiento?: NullableStringFieldUpdateOperationsInput | string | null
    imagenes?: consultasUpdateimagenesInput | string[]
    notas?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type consultasUncheckedUpdateWithoutPacientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha_consulta?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_consulta?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    diagnostico?: NullableStringFieldUpdateOperationsInput | string | null
    tratamiento?: NullableStringFieldUpdateOperationsInput | string | null
    imagenes?: consultasUpdateimagenesInput | string[]
    notas?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type consultasUncheckedUpdateManyWithoutPacientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha_consulta?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_consulta?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    diagnostico?: NullableStringFieldUpdateOperationsInput | string | null
    tratamiento?: NullableStringFieldUpdateOperationsInput | string | null
    imagenes?: consultasUpdateimagenesInput | string[]
    notas?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type contactos_emergenciaUpdateWithoutPacientesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    relacion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: StringFieldUpdateOperationsInput | string
  }

  export type contactos_emergenciaUncheckedUpdateWithoutPacientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    relacion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: StringFieldUpdateOperationsInput | string
  }

  export type contactos_emergenciaUncheckedUpdateManyWithoutPacientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    relacion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: StringFieldUpdateOperationsInput | string
  }

  export type enfermedadesUpdateWithoutPacientesInput = {
    enfermedad?: StringFieldUpdateOperationsInput | string
  }

  export type enfermedadesUncheckedUpdateWithoutPacientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    enfermedad?: StringFieldUpdateOperationsInput | string
  }

  export type enfermedadesUncheckedUpdateManyWithoutPacientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    enfermedad?: StringFieldUpdateOperationsInput | string
  }

  export type historial_cirugiasUpdateWithoutPacientesInput = {
    cirugia?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type historial_cirugiasUncheckedUpdateWithoutPacientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cirugia?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type historial_cirugiasUncheckedUpdateManyWithoutPacientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cirugia?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type medicamentos_actualesUpdateWithoutPacientesInput = {
    medicamento?: StringFieldUpdateOperationsInput | string
    dosis?: StringFieldUpdateOperationsInput | string
    frecuencia?: StringFieldUpdateOperationsInput | string
    via_administracion?: StringFieldUpdateOperationsInput | string
  }

  export type medicamentos_actualesUncheckedUpdateWithoutPacientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicamento?: StringFieldUpdateOperationsInput | string
    dosis?: StringFieldUpdateOperationsInput | string
    frecuencia?: StringFieldUpdateOperationsInput | string
    via_administracion?: StringFieldUpdateOperationsInput | string
  }

  export type medicamentos_actualesUncheckedUpdateManyWithoutPacientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicamento?: StringFieldUpdateOperationsInput | string
    dosis?: StringFieldUpdateOperationsInput | string
    frecuencia?: StringFieldUpdateOperationsInput | string
    via_administracion?: StringFieldUpdateOperationsInput | string
  }

  export type pacientesCreateManyTipos_sangreInput = {
    id?: number
    dni: string
    nombre: string
    apellido: string
    fecha_nacimiento: Date | string
    numero_telefono: string
    email: string
    obra_social?: string | null
    tutor_legal_id?: number | null
  }

  export type pacientesUpdateWithoutTipos_sangreInput = {
    dni?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    obra_social?: NullableStringFieldUpdateOperationsInput | string | null
    alergias?: alergiasUpdateManyWithoutPacientesNestedInput
    consultas?: consultasUpdateManyWithoutPacientesNestedInput
    contactos_emergencia?: contactos_emergenciaUpdateManyWithoutPacientesNestedInput
    enfermedades?: enfermedadesUpdateManyWithoutPacientesNestedInput
    historial_cirugias?: historial_cirugiasUpdateManyWithoutPacientesNestedInput
    medicamentos_actuales?: medicamentos_actualesUpdateManyWithoutPacientesNestedInput
    tutores_legales?: tutores_legalesUpdateOneWithoutPacientesNestedInput
  }

  export type pacientesUncheckedUpdateWithoutTipos_sangreInput = {
    id?: IntFieldUpdateOperationsInput | number
    dni?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    obra_social?: NullableStringFieldUpdateOperationsInput | string | null
    tutor_legal_id?: NullableIntFieldUpdateOperationsInput | number | null
    alergias?: alergiasUncheckedUpdateManyWithoutPacientesNestedInput
    consultas?: consultasUncheckedUpdateManyWithoutPacientesNestedInput
    contactos_emergencia?: contactos_emergenciaUncheckedUpdateManyWithoutPacientesNestedInput
    enfermedades?: enfermedadesUncheckedUpdateManyWithoutPacientesNestedInput
    historial_cirugias?: historial_cirugiasUncheckedUpdateManyWithoutPacientesNestedInput
    medicamentos_actuales?: medicamentos_actualesUncheckedUpdateManyWithoutPacientesNestedInput
  }

  export type pacientesUncheckedUpdateManyWithoutTipos_sangreInput = {
    id?: IntFieldUpdateOperationsInput | number
    dni?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    obra_social?: NullableStringFieldUpdateOperationsInput | string | null
    tutor_legal_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type pacientesCreateManyTutores_legalesInput = {
    id?: number
    dni: string
    nombre: string
    apellido: string
    tipo_sangre_id?: number | null
    fecha_nacimiento: Date | string
    numero_telefono: string
    email: string
    obra_social?: string | null
  }

  export type pacientesUpdateWithoutTutores_legalesInput = {
    dni?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    obra_social?: NullableStringFieldUpdateOperationsInput | string | null
    alergias?: alergiasUpdateManyWithoutPacientesNestedInput
    consultas?: consultasUpdateManyWithoutPacientesNestedInput
    contactos_emergencia?: contactos_emergenciaUpdateManyWithoutPacientesNestedInput
    enfermedades?: enfermedadesUpdateManyWithoutPacientesNestedInput
    historial_cirugias?: historial_cirugiasUpdateManyWithoutPacientesNestedInput
    medicamentos_actuales?: medicamentos_actualesUpdateManyWithoutPacientesNestedInput
    tipos_sangre?: tipos_sangreUpdateOneWithoutPacientesNestedInput
  }

  export type pacientesUncheckedUpdateWithoutTutores_legalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    dni?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    tipo_sangre_id?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    obra_social?: NullableStringFieldUpdateOperationsInput | string | null
    alergias?: alergiasUncheckedUpdateManyWithoutPacientesNestedInput
    consultas?: consultasUncheckedUpdateManyWithoutPacientesNestedInput
    contactos_emergencia?: contactos_emergenciaUncheckedUpdateManyWithoutPacientesNestedInput
    enfermedades?: enfermedadesUncheckedUpdateManyWithoutPacientesNestedInput
    historial_cirugias?: historial_cirugiasUncheckedUpdateManyWithoutPacientesNestedInput
    medicamentos_actuales?: medicamentos_actualesUncheckedUpdateManyWithoutPacientesNestedInput
  }

  export type pacientesUncheckedUpdateManyWithoutTutores_legalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    dni?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    tipo_sangre_id?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    obra_social?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}