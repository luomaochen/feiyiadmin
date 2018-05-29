<template>
    <div id="allmap" class="allmap"></div>

</template>
<script>

    export default {
        name: '',
        data() {
            return {

            }
        },
        mounted() {

            // 百度地图API功能
            var map = new BMap.Map("allmap");
            var point = new BMap.Point(116.404, 39.915);
            map.centerAndZoom(point, 15);
            var marker = new BMap.Marker(point);  // 创建标注
            map.addOverlay(marker);               // 将标注添加到地图中
            marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画

            var navigationControl = new BMap.NavigationControl({
                // 靠左上角位置
                anchor: BMAP_ANCHOR_TOP_LEFT,
                // LARGE类型
                type: BMAP_NAVIGATION_CONTROL_LARGE,
                // 启用显示定位
                enableGeolocation: true
            });
            map.addControl(navigationControl);

        }
    }

</script>
<style scoped>
    .allmap {
        width: 100%;
        height: 400px;
    }




</style>
