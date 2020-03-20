package com.baomidou.crab.common.web;

import javax.servlet.http.HttpServletRequest;

import com.baomidou.crab.common.spring.SpringHelper;
import com.baomidou.crab.common.ErrorCode;
import com.baomidou.kisso.SSOHelper;
import com.baomidou.kisso.security.token.SSOToken;
import com.baomidou.mybatisplus.extension.api.Assert;

/**
 * <p>
 * 用户登录信息辅助类
 * </p>
 *
 * @author hubin
 * @date 2018-11-06
 */
public class LoginHelper {

  public static Account getAccount() {
    return getAccount(SpringHelper.getCurrentRequest(), true);
  }

  public static Account getAccount(boolean fail) {
    return getAccount(SpringHelper.getCurrentRequest(), fail);
  }

  /**
   * <p>
   * 获取当前登录用户信息
   * </p>
   *
   * @param fail 是否抛出异常
   * @return 用户信息
   */
  public static Account getAccount(HttpServletRequest request, boolean fail) {
    SSOToken st = SSOHelper.getSSOToken(request);
    Assert.fail(fail && null == st, ErrorCode.NOT_LOGIN);
    Account Account = new Account();
    Account.setId(Long.valueOf(st.getId()));
    Account.setName(st.getIssuer());
    return Account;
  }
}
