import React, {Component} from 'react';

class CategorySelect extends Component {
    render() {
        return (
            <div>
                <div className="field">
                    <div className="control">
                        <div className="select is-fullwidth is-charcoal">
                            <select name={'category'} onChange={this.props.onSelect}>
                                <option value={''}>Select Category</option>
                                <option value={'art'}>Art</option>
                                <option value={'books'}>Books</option>
                                <option value={'business'}>Business</option>
                                <option value={'dev_tools'}>Dev Tools</option>
                                <option value={'education'}>Education</option>
                                <option value={'entertainment'}>Entertainment</option>
                                <option value={'finance'}>Finance</option>
                                <option value={'food'}>Food</option>
                                <option value={'fitness'}>Fitness</option>
                                <option value={'games'}>Games</option>
                                <option value={'health'}>Health</option>
                                <option value={'lifestyle'}>Lifestyle</option>
                                <option value={'kids'}>Kids</option>
                                <option value={'news'}>News</option>
                                <option value={'medical'}>Medical</option>
                                <option value={'music'}>Music</option>
                                <option value={'navigation'}>Navigation</option>
                                <option value={'photo_and_video'}>Photo & Video</option>
                                <option value={'productivity'}>Productivity</option>
                                <option value={'shopping'}>Shopping</option>
                                <option value={'social'}>Social</option>
                                <option value={'sports'}>Sports</option>
                                <option value={'travel'}>Travel</option>
                                <option value={'utilities'}>Utilities</option>
                                <option value={'weather'}>Weather</option>
                                <option value={'other'}>Other</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CategorySelect;