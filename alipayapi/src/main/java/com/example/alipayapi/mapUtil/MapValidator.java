package  com.example.alipayapi.mapUtil;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;

public class MapValidator {
    private static Map sourceMap;
    private static List errMsg = new ArrayList();
    private static volatile MapValidator instance = null;

    public static MapValidator init(Map map){
        if(instance == null){
            synchronized (MapValidator.class){
                if(instance == null){
                    instance = new MapValidator();
                }
            }
        }
        sourceMap = map;
        // 清空list
        errMsg = new ArrayList();
        return instance;
    }

    public MapValidator verify(String key, String msg){
        if(isNullOrEmpty(sourceMap.get(key))){
            errMsg.add(msg);
        }
        return this;
    }

    /**
     * 校验 map 是否含所有的指定键值，非空时返回 true，否则返回 false
     */
    public void validate() {
        if(errMsg.size() > 0){
            throw new MapValidatorException(errMsg);
        }
    }

    /**
     * 非空
     */
    public static boolean isNullOrEmpty(Object pObj) {
        if (pObj == null) {
            return true;
        } else {
            if (pObj instanceof String) {
                if (((String)pObj).trim().length() == 0) {
                    return true;
                }
            } else if (pObj instanceof Collection) {
                if (((Collection)pObj).size() == 0) {
                    return true;
                }
            } else if (pObj instanceof Map && ((Map)pObj).size() == 0) {
                return true;
            }

            return false;
        }
    }

    // 手机号验证
    public static boolean isMobile(String mobile) {
        String reg = "(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)";
        boolean isMobile = mobile.matches(reg);
        return isMobile;
    }

    // 是否是正整数或正小数
    public static boolean numMatcher(String value){
        String reg = "^\\+?\\d+(\\.\\d+)?$";
        boolean matches = value.matches(reg);
        return matches;
    }

    // 是否是整数
    public static boolean isInteger(String value){
        String reg = "^[0-9]*$";
        boolean matches = value.matches(reg);
        return matches;
    }

    // 校验日期格式 yy-MM-dd
    public static boolean isDate(String value){
        String reg = "^((([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29))$";
        boolean matches = value.matches(reg);
        return matches;
    }

}
