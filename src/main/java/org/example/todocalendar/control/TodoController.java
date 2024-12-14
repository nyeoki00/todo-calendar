package org.example.todocalendar.control;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequiredArgsConstructor
public class TodoController {

    @GetMapping("")
    public String list() {
        return "todoCalendar/list";
    }
}
