# swiper踩雷
1.被swiper.directive坑的很慘，超難客製化，因為她裡面是用shadow DOM來製作，外部css很難影響到裡面，而且參數蠻多設定都無效，不知道算不算Bug。

解決方法:直接複製官網的html，並且用new的方式升成swiper實體(要在ngAfterViewInit生命週期中)，但要注意的是autoplay在手動更改圖片順序時會停止，要額外設定disableOnInteraction:false

# SSR坑

