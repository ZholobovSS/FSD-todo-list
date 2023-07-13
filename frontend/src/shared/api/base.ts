import ky from 'ky'
// eslint-disable-next-line import/no-internal-modules
import { getEnvVariable } from 'shared/lib'

export const api = ky.create({ prefixUrl: getEnvVariable('VITE_API_URL') })
