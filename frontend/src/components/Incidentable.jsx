function Incidentable() {
  return (
    <section>
      <h2>Recent Incidents</h2>

      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Camera</th>
            <th>Violation</th>
            <th>Severity</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>10:32 AM</td>
            <td>Camera 01</td>
            <td>No Hardhat</td>
            <td>High</td>
          </tr>

          <tr>
            <td>10:28 AM</td>
            <td>Camera 02</td>
            <td>No Safety Vest</td>
            <td>Medium</td>
          </tr>

          <tr>
            <td>10:21 AM</td>
            <td>Camera 01</td>
            <td>No Mask</td>
            <td>High</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default Incidentable