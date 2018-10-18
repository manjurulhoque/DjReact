import React, {Component} from 'react';
import axios from 'axios';

class ArticleCreate extends Component {

    state = {
        title: '',
        content: '',
        photo: '',
        imagePreviewUrl: ''
    };

    onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', this.state.title);
        formData.append('content', this.state.content);
        formData.append('photo', this.state.photo);

        axios.post('http://127.0.0.1:8000/api/', formData)
            .then(res => this.props.history.push('/'))
            .catch(err => console.log(err))
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

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

export default ArticleCreate;