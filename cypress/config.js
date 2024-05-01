import  { environment} from './e2e/environments/environment'

export function getbaseurl() {
    return `${environment.SCHEMA}://${environment.BASEURL}`;
}