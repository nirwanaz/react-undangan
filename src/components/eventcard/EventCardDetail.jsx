import React from "react";

export const EventCardDetail = ({ dateStart, dateEnd, timeStart, timeEnd, location }) => {
  const formatLocaleDate = (date) => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }

    return new Date(date).toLocaleDateString("id-ID", options)
  }
  
  return (
    <div className="eventCard-detail">
      <table>
        <tbody>
          <tr>
            <td>Hari</td>
            <td>{formatLocaleDate(dateStart)}&nbsp;-&nbsp;{dateEnd ? formatLocaleDate(dateEnd) : "selesai"}</td>
          </tr>
          <tr>
            <td>Jam</td>
            <td>{timeEnd ? `${timeStart} - ${timeEnd}` : `${timeStart} - selesai`}</td>
          </tr>
          <tr>
            <td>Lokasi</td>
            <td>{location}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}