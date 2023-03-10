import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { toODataString } from '@progress/kendo-data-query';
export const DataLoader = props => {
  const baseUrl = 'https://gorest.co.in/public/v1/users';
  const init = {
    method: 'GET',
    accept: 'application/json',
    headers: {}
  };
  const lastSuccess = React.useRef('');
  const pending = React.useRef('');
  const requestDataIfNeeded = () => {
    if (pending.current || toODataString(props.dataState) === lastSuccess.current) {
      return;
    }
    pending.current = toODataString(props.dataState);
    fetch(baseUrl + pending.current, init).then(response => response.json()
    ).then(json => {
      lastSuccess.current = pending.current;
      pending.current = '';
      if (toODataString(props.dataState) === lastSuccess.current) {
        props.onDataReceived.call(undefined, {
          data: json.value,
          total: json['@odata.count']
        });
      } else {
        requestDataIfNeeded();
      }
     
    });
  };
  requestDataIfNeeded();
  return pending.current ? <LoadingPanel /> : null;
};
const LoadingPanel = () => {
  const loadingPanel = <div className="k-loading-mask">
        <span className="k-loading-text">Loading</span>
        <div className="k-loading-image" />
        <div className="k-loading-color" />
      </div>;
  const gridContent = document && document.querySelector('.k-grid-content');
  return gridContent ? ReactDOM.createPortal(loadingPanel, gridContent) : loadingPanel;
};