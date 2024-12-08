# Unexpected 'undefined' output with optional parameter in TypeScript

This repository demonstrates a common TypeScript issue related to optional parameters and their default values. The issue arises when an optional parameter is not provided, resulting in 'undefined' being printed to the console instead of the expected default value or behavior.

## Bug Description:
The function `printName` accepts an optional parameter `name`. When the function is called without providing an argument, the output is unexpectedly 'undefined'. The expectation was for the function to handle the absence of a value gracefully, perhaps by printing a default message or not printing anything at all.

## Solution:
The solution introduces improved error handling and optional chaining to manage the absence of the optional parameter.