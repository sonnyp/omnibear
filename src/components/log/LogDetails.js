import {h, Component} from 'preact';

export default class LogDetails extends Component {
  render() {
    const {details} = this.props;
    return <div class="log-details">{this.renderDetail(details, true)}</div>;
  }

  renderDetail(detail, isTopLevel) {
    const marginLeft = `${isTopLevel ? 0 : 1}em`;
    if (typeof detail === 'string') {
      return <span>{detail}</span>;
    }
    if (Array.isArray(detail)) {
      return (
        <div style={{marginLeft}}>
          {'['}
          {detail.map(d => (
            <div style={{marginLeft}}>{this.renderDetail(d)},</div>
          ))}
          {']'}
        </div>
      );
    }
    return [
      <span>{'{'}</span>,
      <div style={{marginLeft}}>
        {Object.keys(detail).map(key => (
          <div style={{marginLeft: '1em'}}>
            {key}: {this.renderDetail(detail[key])}
          </div>
        ))}
      </div>,
      <span>{'}'}</span>,
    ];
  }
}