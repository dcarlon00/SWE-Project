
function FormItem({form}) {
  const dateParsed = form.delDate.slice(0,10)

  return (
    <>
    <div>
        <table border="1" id="cssTable">
            <thead>
                <tr>
                    <th>Gallons Requested</th>
                    <th>Delivery Address</th>
                    <th>Delivery Date</th>
                    <th>Price Per Gallon</th>
                    <th>Total Amount Due</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{form.galReq}</td>
                    <td>{form.delAdd}</td>
                    <td>{dateParsed}</td>
                    <td>{form.ppGal}</td>
                    <td>{form.total}</td>
                </tr>
            </tbody>
        </table>
    </div>
    </>
  )
}

export default FormItem;