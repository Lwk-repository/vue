package com.example.alipayapi.mapUtil;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MapValidatorException extends RuntimeException implements Serializable {
    private final List<Map<String, String>> errorMessage = new ArrayList();
    public MapValidatorException() {}

    public MapValidatorException(List<String> messages) {
        messages.forEach((p) -> {
            Map map = new HashMap();
            map.put("message", p);
            this.errorMessage.add(map);
        });
    }

    public List<Map<String, String>> getMessagesInfo() {
        return this.errorMessage;
    }

    public List<String> getMessages() {
        List<String> res = new ArrayList();
        this.errorMessage.forEach((p) -> {
            res.add(p.get("message"));
        });
        return res;
    }
}
