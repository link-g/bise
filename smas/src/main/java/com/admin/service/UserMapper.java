package com.admin.service;

import com.admin.domain.EmployeeEntity;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import com.admin.domain.User;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface UserMapper extends BaseMapper<EmployeeEntity> {
    //@Select("select emid,password from employee")
    List<User> queryUserList();
}
