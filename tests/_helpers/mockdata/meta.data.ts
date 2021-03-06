import { Code, CodeCreate } from '../../../src/models/code.model';
import { CodeType, CodeTypeCreate } from '../../../src/models/code-type.model';
import { tableNames } from '../../../src/constants';
import { db } from '../../../src/lib/db';
import * as metaRepository from '../../../src/repositories/meta.repository';

export async function createCodeType(values: CodeTypeCreate) {
  return metaRepository.createCodeType(values);
}

export async function createCode(codeTypeId: string, values: CodeCreate) {
  return metaRepository.createCode(codeTypeId, values);
}

export function clearCodeTypesData() {
  return db(tableNames.CODETYPES).del();
}

export function clearCodesData() {
  return db(tableNames.CODES).del();
}
