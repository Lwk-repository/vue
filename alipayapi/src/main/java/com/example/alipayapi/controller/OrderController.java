package com.example.alipayapi.controller;

import com.alipay.api.AlipayApiException;
import com.example.alipayapi.bean.AlipayBean;
import com.example.alipayapi.config.AlipayUtil;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/* 订单接口 */
@RestController
@RequestMapping("/order/")
public class OrderController {

    /*阿里支付*/
    @PostMapping("alipay")
    public String alipay(String out_trade_no, String subject, String total_amount, String body) throws AlipayApiException {

        return AlipayUtil.connect(new AlipayBean()
                .setBody(body)
                .setOut_trade_no(out_trade_no)
                .setTotal_amount(new StringBuffer().append(total_amount))
                .setSubject(subject));
    }


}
