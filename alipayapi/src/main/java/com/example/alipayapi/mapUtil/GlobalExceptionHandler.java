package com.example.alipayapi.mapUtil;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;


/**
 * @author zhouwei
 * @date 2020/07/16 13:43
 *
 */
@RestControllerAdvice
//@Slf4j
public class GlobalExceptionHandler {
    @ExceptionHandler(MapValidatorException.class)
    public MapResponseWrap mapValidatorException(MapValidatorException e) {
        return MapResponseWrap.failList(400, e.getMessages());
    }
}
