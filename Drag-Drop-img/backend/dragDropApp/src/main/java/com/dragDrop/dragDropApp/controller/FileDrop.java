package com.dragDrop.dragDropApp.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/file")
public class FileDrop {

    //single file
    @PostMapping("/dropped")
    public void fileDisplay(@RequestParam("file") MultipartFile file)throws IOException {

        String fileName = file.getOriginalFilename();

        System.out.println(fileName);
        System.out.println(file);


    }

}
