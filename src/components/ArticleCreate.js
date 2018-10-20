import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { getCategories } from '../store/actions/categories';

class ArticleCreate extends Component {

    componentDidMount() {
        //this.props.getCategories();
        //this.state.categories = this.props.categories;
    }

    state = {
        title: '',
        content: '',
        photo: '',
        imagePreviewUrl: '',
        categories: [],
        category_id: null
    };

    onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', this.state.title);
        formData.append('content', this.state.content);
        formData.append('photo', this.state.photo);
        formData.append('category', this.state.category_id);

        axios.post('http://127.0.0.1:8000/api/', formData)
            .then(res => this.props.history.push('/'))
            .catch(err => console.log(err))
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    onChangeSelect = (e) => {
        this.setState({category_id: e.target.value});
    }

    onFileChange = e => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                photo: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file);
    };

    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
        const { categories } = this.props.categories;
        const categoriesOptions = categories.map(category => 
            <option key={category.id} value={category.id}>{category.title}</option>
        )
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-2">
                        <h2>Create an article</h2>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="title"
                                    required
                                    onChange={this.onChange}
                                    className="form-control"
                                    placeholder="Enter title..."/>
                            </div>

                            <div className="form-group">
                                <select name="category_id" required onChange={this.onChangeSelect} className="form-control">
                                    <option disabled value="">Choose category</option>
                                    {categoriesOptions}
                                </select>
                            </div>

                            <div className="form-group">
                                <textarea
                                    type="text"
                                    required
                                    name="content"
                                    onChange={this.onChange}
                                    className="form-control"
                                    placeholder="Enter some content..."></textarea>
                            </div>

                            <div className="form-group">
                                <input type="file" accept="image/*" onChange={(e) => this.onFileChange(e)} required className="form-control" />
                                <div className="imgPreview">
                                    {$imagePreview}
                                </div>
                            </div>
                            <button type="submit" className="btn btn-success">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    categories: state.categories
});

export default connect(mapStateToProps, { getCategories })(ArticleCreate);