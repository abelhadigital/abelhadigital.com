function gen_link(lhs,rhs,subject) {
    document.write("<a href=\"mailto");
    document.write(":" + lhs + "@");
    document.write(rhs + "?subject=" + subject + "\">" + lhs + "@" + rhs + "<\/a>");
}
