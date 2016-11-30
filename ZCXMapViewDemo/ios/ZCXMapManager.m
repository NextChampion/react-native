//
//  ZCXMapManager.m
//  ZCXMapViewDemo
//
//  Created by zhangcunxia on 16/11/30.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "ZCXMapManager.h"

#import <MapKit/MapKit.h>

@implementation ZCXMapManager

// 导出该类到react-native
RCT_EXPORT_MODULE()
// 导出属性
RCT_EXPORT_VIEW_PROPERTY(pitchEnabled, BOOL)
// 创建原生视图
- (UIView *)view
{
  return [[MKMapView alloc] init];
}

@end
