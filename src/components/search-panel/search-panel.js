import { Component } from 'react'; // для створення компонента через Class
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <input type="text"
                className="form-control search-input"
                placeholder="Знайти співробітика"
                value={this.state.term}
                onChange={this.onUpdateSearch} />
        );
    }

}

export default SearchPanel;