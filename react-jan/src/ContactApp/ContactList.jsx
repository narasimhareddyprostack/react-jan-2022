let ContactList = (props) => {
    return <>
        <h1>Contact List</h1>
        <pre>{JSON.stringify(props.myList)}</pre>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <table className="table table-hover">
                        <thead>
                            <tr> <th>Id</th>
                                <th>Name</th>
                                <th>Email</th></tr>
                        </thead>
                        <tbody>
                            {
                                props.myList.map((contact) => {
                                    return <tr key={contact.login.uuid}>
                                        <td>{contact.login.uuid.substring(0, 4)}</td>
                                        <td>{contact.name.last}</td>
                                        <td>{contact.email}</td>
                                    </tr>

                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </>
}
export default ContactList;