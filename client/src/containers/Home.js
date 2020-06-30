import React, { Component } from 'react'
import Homepage from '../components/Homepage/homepage'

// import { connect } from 'react-redux'



// import * as actionCreators from '../store/actions/authActions'

class Home extends Component {

    componentDidMount(){

        // this.props.loadUser()
    }
    

    render() {
        // if(this.props.user && this.props.user.data)
        //     console.log(this.props.user.data.name)
        // let home = (
        //     <h4>Login to continue</h4>
        // )
        
        // if(this.props.user && this.props.user.data)
        //     home = (
        //         <Fragment>
        //             <h1>Welcome {this.props.user.data.name }</h1>
        //             <div className = "btn btn-danger" onClick={this.props.onLogout}>Logout</div>        
        //         </Fragment>
        //     )




        return (
            <div className="mt-3">
                <Homepage />
            </div>)
        
    }
}

// const mapStatetoProps = state => {
//     return{
//         user: state.auth.user,
//     }
// }

// const mapDispatchtoProps = dispatch => {
//     return {
//         loadUser: () => dispatch(actionCreators.loadUser()),
//         onLogout: () => dispatch(actionCreators.logOut()),
//     }
// }


// export default connect(mapStatetoProps, mapDispatchtoProps)(Home)
export default Home
