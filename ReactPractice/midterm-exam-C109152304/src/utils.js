import moment from "moment"
import "moment-duration-format"

export const transferTimeToHumanize = timeSeconds => {
  const duration = moment.duration(timeSeconds, "seconds")
  return duration.format("hh:mm:ss")
}
