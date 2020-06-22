import {whiteBright} from 'cli-color'
import $RefParser = require('@apidevtools/json-schema-ref-parser')
import {JSONSchema} from './types/JSONSchema'
import {log} from './utils'

export async function dereference(
  schema: JSONSchema,
  {cwd, $refOptions}: {cwd: string; $refOptions: $RefParser.Options}
): Promise<JSONSchema> {
  log(whiteBright.bgGreen('resolver'), schema, cwd, $refOptions)
  const parser = new $RefParser()
  return parser.dereference(cwd, schema, $refOptions)
}
