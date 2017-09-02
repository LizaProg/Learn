package com.sabahtalateh;

public class Cat {

    private String name;

    private int age;

    private boolean isAlive = true;

    public Cat(String name, int age)
    {
        this.name = name;
        this.age = age;
    }

    public String toString()
    {
        String s = "Cat: " + this.name + " age is " + this.age;
        if (!this.isAlive) {
            s = s + " and he is dead";
        }

        return s;
    }

    public void birthday()
    {

        if (this.age <= 18) {
            this.age = this.age + 1;
        } else {
            this.isAlive = false;
        }
    }
}
