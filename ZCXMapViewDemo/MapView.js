import React from 'react';
import { requireNativeComponent } from 'react-native';
// module.exports = requireNativeComponent('ZCXMap', null);
var ZCXMap = requireNativeComponent('ZCXMap', MapView);
class MapView extends React.Component {
  render() {
    return <ZCXMap {...this.props} style={{width: 200, height: 100}}/>;
  }
}
MapView.propTypes = {
  /**
   * 当这个属性被设置为true, 并且地图上绑定了一个有效的可视区域的情况下,
   * 可以通过捏放操作来改变摄像头的偏转角度,
   * 当这个属性被设置成false时, 摄像头的角度会被忽略, 地图会一直显示为俯视状态.
   */
  pitchEnabled: React.PropTypes.bool,
};
module.exports = MapView;
