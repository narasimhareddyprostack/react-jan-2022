import React, { Component } from 'react'

export class ContactDetails extends Component {
    render() {
        return (
            <div>
                <div className="container mt-5">
                    <pre>{JSON.stringify(this.props.details)}</pre>
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header ">
                                    <img src={this.props.details.picture.large} />
                                </div>
                                <div className="card-body">
                                    <ul class="list-group">
                                        <li class="list-group-item">{this.props.details.email}</li>
                                        <li class="list-group-item">{this.props.details.gender}</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactDetails
