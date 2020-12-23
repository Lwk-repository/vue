package com.example.alipayapi.controller;

import com.example.alipayapi.mapUtil.MapValidator;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class ExceTest {
    @GetMapping("/test/map")
    public void test(){
        Map map = new HashMap();
        map.put("a",1);
        map.put("b",1);
        MapValidator.init(map)
                .verify("c","请输入c")
                .verify("d", "请输入d")
                .validate();
    }
}
