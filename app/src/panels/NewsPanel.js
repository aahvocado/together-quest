import React, { PureComponent } from 'react';
import { Panel } from 'components/LayoutComponent';


class NewsItem extends PureComponent {
  static defaultProps = {
    data: {},
  };

  render() {
    const { data: { date, content, title } } = this.props;

    return (
      <li className='tg-news-item'>
        <span className='tg-news-item-title'>{ title }</span>
        <span className='tg-news-item-date'>{ date }</span>
        <p className='tg-news-item-content'>{ content }</p>
      </li>
    )
  }
}

class NewsPanel extends PureComponent {
  static defaultProps = {
    newsData: [{date: 'Thu Aug 16 2018 16:37:57 GMT-0700 (Pacific Daylight Time)', title: 'Start of News', content: 'Together Quest ~ begins together!'}],
  };

  render() {
    const { newsData } = this.props;

    return (
      <Panel className='tg-news bg-blue'>
        <h2 className='tg-news-heading'>News</h2>
        <ul className='tg-news-list'>
          { newsData.map((news) => {
            return <NewsItem data={news} key={news.date}/>
          })}
        </ul>
      </Panel>
    );
  }
}

export default NewsPanel;
