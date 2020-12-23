package com.example.alipayapi.mapUtil;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Data
public class MapResponseWrap {
    private Integer code;
    private String message;
    private Object data;
    private List<Map<String, String>> msg = new ArrayList<>();
    private List<String> sMsg = new ArrayList<>();

    public static MapResponseWrap failMap(Integer code, List<Map<String, String>> list) {
        MapResponseWrap view = new MapResponseWrap();
        view.setCode(code);
        view.setMsg(list);
        return view;
    }

    public static MapResponseWrap failList(Integer code, List<String> list) {
        MapResponseWrap view = new MapResponseWrap();
        view.setCode(code);
        view.setSMsg(list);
        return view;
    }
}
