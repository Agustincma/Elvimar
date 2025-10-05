import { GeneralClientData } from '../types/GeneralClient.types'

export const getUserData: Partial<GeneralClientData> = (data: any) => {
    const firstInitial = data.firstName ? data.firstName[0] : '';
    const LastInitial = data.lastName ? data.lastName[0] : '';
    return `${firstInitial}${LastInitial}`.toUpperCase()
}
module.exports = {
    getUserData
}