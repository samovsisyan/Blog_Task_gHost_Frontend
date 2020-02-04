// // import React, {Component, useLayoutEffect} from 'react';
// // import {connect} from "react-redux";
// // import {getBlogs} from '../store/actions/blog';
// //
// //
// // class Blog extends Component {
// //
// //     componentDidMount() {
// //         this.props.getBlogs(1)
// //
// //         cons
// //     }
// //
// //     render() {
// //
// //         const {blog} = this.props.blogData;
// //         console.log(blog,11111111);
// //
// //
// //             return (
// //                 <div>
// //                     Hello
// //
// //                 </div>
// //
// //         );
// //     }
// // }
// //
// //
// // const mapStateToProps = (state) => ({
// //     blogData: state.blog.blogData,
// // });
// //
// // const mapDispatchToProps = {
// //     getBlogs,
// //
// // };
// // const BlogContainer = connect(
// //     mapStateToProps,
// //     mapDispatchToProps,
// // )(Blog);
// //
// // export default BlogContainer;
//

import React, {Component} from 'react';
import {connect} from "react-redux";
import {getBlog} from '../store/actions/blog';


class Blog extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         selected: this.props.blogData,
    //     }
    // }

    componentDidMount() {
        this.props.getBlog(1)
    }

    render() {
        const {blog} = this.props;
        console.log(blog,1111111111)
        return (
            <div>
                    Hello
            </div>

        );
    }
}


const mapStateToProps = (state) => ({
    authError: state.blog.authError,
    blogData: state.blog.user,
});

const mapDispatchToProps = {
    getBlog,

};
const BlogContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Blog);

export default BlogContainer;


//
// import React, {Component} from 'react';
// import {connect} from "react-redux";
// import {getBlog} from "../store/actions/blog";
// import PropTypes from 'prop-types';
//
//
// class Blog extends Component {
//
//
// // componentDidMount() {
// //     this.props.getData(1)
// // }
//
//
//     render() {
//         const {dataBlog} = this.props.data;
//
//         console.log(dataBlog,2222222222222)
//         return (
//             <div>
//
//             </div>
//         );
//     }
// }
//
// const mapStateToProps = (state) => ({
//     authError: state.blog.authError,
//     dataBlog: state.blog.data
// });
//
// const mapDispatchToProps = {
//     getBlog,
// };
//
//
// const Container = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Blog);
//
//
// export default Container;
