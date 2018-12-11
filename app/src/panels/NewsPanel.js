import React, { PureComponent } from 'react';

import {
  ListComponent,
  Panel,
} from 'components';

/**
 * contains the news
 *
 * todo: fetch from db or something
 */
class NewsItem extends PureComponent {
  static defaultProps = {
    /** @type {String} */
    content: '',
    /** @type {String} */
    date: '',
    /** @type {String} */
    title: '',
  };

  render() {
    const { date, content, title } = this.props;

    return (
      <li className='tg-news-item flex-col pad-l-3 sibling-mar-t-2'>
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
        <ListComponent
          className='tg-news-list mar-t-2'
          list={newsData}
          ItemComponent={NewsItem}
          getKey={(props) => (props.date)}
        />
      </Panel>
    );
  }
}

export default NewsPanel;
