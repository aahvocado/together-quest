import React, { PureComponent } from 'react';
import Panel from 'components/PanelComponent';


class NewsItem extends PureComponent {
  static defaultProps = {
    data: {},
  };

  render() {
    const { data: { date, content, title } } = this.props;

    return (
      <li className='tg-news-item flex-col pad-l-3'>
        <span className='fsize-base f-bold'>{ title }</span>
        <span className='fsize-small mar-t-1 f-italic'>{ date }</span>
        <p className='fsize-base mar-t-1'>{ content }</p>
      </li>
    )
  }
}

class NewsPanel extends PureComponent {
  static defaultProps = {
    newsData: [{
      date: 'Tue Dec 11 2018 12:53:06',
      title: 'News Update',
      content: 'This came a long way despite not much functionality additions. There is now a Server status check and the Game Master can send character data.'
    }, {
      date: 'Thu Aug 16 2018 16:37:57',
      title: 'Start of News',
      content: 'Together Quest ~ begins together!'
    }],
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
