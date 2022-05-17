import * as luxon from "luxon"


export const transferTimeToHumanize = (timeSeconds: number) => {
    return luxon.Duration.fromObject({ seconds: timeSeconds }).toFormat("hh:mm:ss")
}
