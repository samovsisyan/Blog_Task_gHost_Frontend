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
//
// import React, {Component, useLayoutEffect} from 'react';
// import {connect} from "react-redux";
// import {getBlogs} from '../store/actions/blog';
// import data from '../data'
//
//
// class Blog extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             selected: this.props.blogData,
//         }
//     }
//
//     componentDidMount() {
//         this.props.getBlogs(1)
//     }
//
//     handleClick = (id) => {
//         this.setState({selected: id})
//     }
//
//     render() {
//         const {selected} = this.state
//         const {category} = this.props
//         console.log(category,2222222222)
//         return (
//             <div className="div-nav">
//                 <div className="grid_12">
//                     <ul className="nav">
//                         {/*{category.map((cat) => (*/}
//                         {/*    <li className={cat.id === selected ? 'selected' : ''}*/}
//                         {/*        onClick={() => this.handleClick(cat.id)}*/}
//                         {/*        key={cat.id}>*/}
//                         {/*        {cat.name}*/}
//                         {/*    </li>*/}
//                         {/*))}*/}
//                     </ul>
//                 </div>
//             </div>
//
//         );
//     }
// }
//
//
// const mapStateToProps = (state) => ({
//     blogData: state.blog.blogData,
// });
//
// const mapDispatchToProps = {
//     getBlogs,
//
// };
// const BlogContainer = connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(Blog);
//
// export default BlogContainer;



import React, {Component} from 'react';
import {connect} from "react-redux";
import {getBlog} from "../store/actions/blog";
import PropTypes from 'prop-types';


class Blog extends Component {
    constructor() {
        super();
        this.state = {
            data: {},
        }
    }


    static propTypes = {
        getBlog: PropTypes.func.isRequired,
    };

    static defaultProps = {
        authError: '',
    };

    handleClick = (values) => {
       const d  = this.props.getBlog(values);
        console.log(this.props.blog(values),1111111111111)
        this.setState({
            data: {...d}
        })
    }


    render() {
        console.log(this.state.data,333333333333)
        const {dataBlog} = this.props.getBlog;

        console.log(dataBlog,2222222222222)
        return (
            <div>
                {/*{dataBlog.map((c) => (*/}
                {/*    <div key={c.id}>*/}
                {/*        <h1>{c.title}</h1>*/}
                {/*    </div>*/}
                {/*))}*/}
                <button onClick={this.handleClick}>Blog</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    authError: state.blog.authError,
    dataBlog: state.blog.data
});

const mapDispatchToProps = {
    getBlog,
};


const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Blog);


export default Container;
