  import {useDispatch,useSelector,shallowEqual} from "react-redux";
  //组件与redux关联要做：获取数据和操作 使用hook
const dispatch = useDispatch();

    const {banner} = useSelector(state => ({
        // banner:state.get("recommend").get("banner"),等价于下面的
            banner:state.getIn(["recommend","banner"]),

        }),shallowEqual);//默认比较返回对象是===比较，每次都创建了一个对象但值一样，但依旧会重新渲染，用shallowEqual(浅层比较)

    useEffect(() => {
        dispatch(getBannersAction());
    })
