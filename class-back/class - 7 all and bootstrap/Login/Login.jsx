let Login = () => {
    return <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <form className="">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Please Enter Email" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="" id="" class="form-control" placeholder="please enter password" />
                        </div>
                        <button className="btn btn-danger mr-2"> Login</button>
                        <button className="btn btn-warning">Reset</button>

                    </form>
                </div>
            </div>
        </div>
    </>
}
export default Login