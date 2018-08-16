import React from 'react';
import AddComment from './AddingComment';

export default class Comments extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      comments: props.comments,
    }
  }

  handleClick(text) {
    const date = new Date();
    let options = {
      year: "numeric",
      month: "long",
      day: "numeric"
    }

    const obj = {
      name: 'Гость',
      date: `${date.toLocaleDateString('ru-RU', options)}`,
      text: text
    };
    const arr = this.state.comments;
    arr.push(obj);
    this.setState({
      comments: arr
    })
  }

  render() {
    return <div><div className="wrapper reviews__list">{
      this.state.comments.map((comment, i) => {
        return (
          <div
            className="reviews__instance"
            key={i}
          >
            <div className="reviews__name">{comment.name}
              <span className="reviews__date">{comment.date}</span>
            </div>
            <div className="reviews__text">{comment.text}
              <div className="triangle">
              </div>
            </div>
          </div>
        )
      })}
    </div>
      <AddComment handler={this.handleClick} />
    </div>


  }
}
