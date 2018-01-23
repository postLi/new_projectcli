<template>
    <div id="search">
        <div class="search_t">
            <div class="search_t_l">
                <i class="el-icon-search"></i>
                <input type="text" placeholder="搜索商品、品牌、货号" />
            </div>
            <a href="javascript:history.go(-1)">取消</a>
        </div>
        <div class="search_b">
            <h2>热门搜索</h2>
            <div class="search_b_b"></div>
        </div>
    </div>
</template>
<script>
    import '../../sass/search.scss';
    export default{}
</script>